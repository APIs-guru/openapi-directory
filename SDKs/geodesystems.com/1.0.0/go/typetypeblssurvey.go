package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type TypeTypeBlsSurvey struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTypeTypeBlsSurvey(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *TypeTypeBlsSurvey {
	return &TypeTypeBlsSurvey{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// SearchTypeBlsSurvey - Search API for 'BLS Survey' entry type
// API to search for entries of type BLS Survey
func (s *TypeTypeBlsSurvey) SearchTypeBlsSurvey(ctx context.Context, request operations.SearchTypeBlsSurveyRequest) (*operations.SearchTypeBlsSurveyResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/repository/search/type/type_bls_survey"

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

	res := &operations.SearchTypeBlsSurveyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
