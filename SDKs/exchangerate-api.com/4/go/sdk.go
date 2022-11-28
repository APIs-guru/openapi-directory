package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

var ServerList = []string{
	"https://api.exchangerate-api.com/v4",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

// SDK Documentation: https://www.exchangerate-api.com/docs/documentation - API Documentation
type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// GetLatestBaseCurrency - Returns latest exchange rates in parameter-supplied base currency.
func (s *SDK) GetLatestBaseCurrency(ctx context.Context, request operations.GetLatestBaseCurrencyRequest) (*operations.GetLatestBaseCurrencyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/latest/{base_currency}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetLatestBaseCurrencyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetLatestBaseCurrency200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetLatestBaseCurrency200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetLatestBaseCurrency404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetLatestBaseCurrency404ApplicationJSONObject = out
		}
	}

	return res, nil
}
