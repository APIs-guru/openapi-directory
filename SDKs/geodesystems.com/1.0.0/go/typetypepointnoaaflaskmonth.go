package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type TypeTypePointNoaaFlaskMonth struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTypeTypePointNoaaFlaskMonth(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *TypeTypePointNoaaFlaskMonth {
	return &TypeTypePointNoaaFlaskMonth{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// SearchTypePointNoaaFlaskMonth - Search API for 'NOAA Flask Month Measurements' entry type
// API to search for entries of type NOAA Flask Month Measurements
func (s *TypeTypePointNoaaFlaskMonth) SearchTypePointNoaaFlaskMonth(ctx context.Context, request operations.SearchTypePointNoaaFlaskMonthRequest) (*operations.SearchTypePointNoaaFlaskMonthResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/repository/search/type/type_point_noaa_flask_month"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SearchTypePointNoaaFlaskMonthResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
