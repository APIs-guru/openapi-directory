package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type TypeTypePointGeomagIaga2002 struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTypeTypePointGeomagIaga2002(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *TypeTypePointGeomagIaga2002 {
	return &TypeTypePointGeomagIaga2002{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// SearchTypePointGeomagIaga2002 - Search API for 'IAGA 2002 Geomagnetism Data' entry type
// API to search for entries of type IAGA 2002 Geomagnetism Data
func (s *TypeTypePointGeomagIaga2002) SearchTypePointGeomagIaga2002(ctx context.Context, request operations.SearchTypePointGeomagIaga2002Request) (*operations.SearchTypePointGeomagIaga2002Response, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/repository/search/type/type_point_geomag_iaga2002"

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

	res := &operations.SearchTypePointGeomagIaga2002Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
