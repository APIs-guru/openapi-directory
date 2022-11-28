package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type CodesOfConduct struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCodesOfConduct(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CodesOfConduct {
	return &CodesOfConduct{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CodesOfConductGetAllCodesOfConduct - Get all codes of conduct
// https://docs.github.com/enterprise-server@3.0/rest/reference/codes-of-conduct#get-all-codes-of-conduct - API method documentation
func (s *CodesOfConduct) CodesOfConductGetAllCodesOfConduct(ctx context.Context) (*operations.CodesOfConductGetAllCodesOfConductResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/codes_of_conduct"

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

	res := &operations.CodesOfConductGetAllCodesOfConductResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.CodeOfConduct
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodeOfConducts = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 415:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CodesOfConductGetAllCodesOfConduct415ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodesOfConductGetAllCodesOfConduct415ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CodesOfConductGetConductCode - Get a code of conduct
// https://docs.github.com/enterprise-server@3.0/rest/reference/codes-of-conduct#get-a-code-of-conduct - API method documentation
func (s *CodesOfConduct) CodesOfConductGetConductCode(ctx context.Context, request operations.CodesOfConductGetConductCodeRequest) (*operations.CodesOfConductGetConductCodeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/codes_of_conduct/{key}", request.PathParams)

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

	res := &operations.CodesOfConductGetConductCodeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodeOfConduct
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodeOfConduct = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 415:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CodesOfConductGetConductCode415ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodesOfConductGetConductCode415ApplicationJSONObject = out
		}
	}

	return res, nil
}
