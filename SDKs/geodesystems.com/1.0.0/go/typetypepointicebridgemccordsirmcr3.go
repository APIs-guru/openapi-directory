package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type TypeTypePointIcebridgeMccordsIrmcr3 struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTypeTypePointIcebridgeMccordsIrmcr3(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *TypeTypePointIcebridgeMccordsIrmcr3 {
	return &TypeTypePointIcebridgeMccordsIrmcr3{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// SearchTypePointIcebridgeMccordsIrmcr3 - Search API for 'McCords Irmcr3 Data' entry type
// API to search for entries of type McCords Irmcr3 Data
func (s *TypeTypePointIcebridgeMccordsIrmcr3) SearchTypePointIcebridgeMccordsIrmcr3(ctx context.Context, request operations.SearchTypePointIcebridgeMccordsIrmcr3Request) (*operations.SearchTypePointIcebridgeMccordsIrmcr3Response, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/repository/search/type/type_point_icebridge_mccords_irmcr3"

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

	res := &operations.SearchTypePointIcebridgeMccordsIrmcr3Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
