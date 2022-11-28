package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type TypeBoulder2017ElectionContributions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTypeBoulder2017ElectionContributions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *TypeBoulder2017ElectionContributions {
	return &TypeBoulder2017ElectionContributions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// SearchBoulder2017ElectionContributions - Search API for 'Boulder 2017 Election Contributions' entry type
// API to search for entries of type Boulder 2017 Election Contributions
func (s *TypeBoulder2017ElectionContributions) SearchBoulder2017ElectionContributions(ctx context.Context, request operations.SearchBoulder2017ElectionContributionsRequest) (*operations.SearchBoulder2017ElectionContributionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/repository/search/type/boulder_2017_election_contributions"

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

	res := &operations.SearchBoulder2017ElectionContributionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
