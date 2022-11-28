package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type TypeBoulderCountyVoterDetails struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTypeBoulderCountyVoterDetails(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *TypeBoulderCountyVoterDetails {
	return &TypeBoulderCountyVoterDetails{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// SearchBoulderCountyVoterDetails - Search API for 'Boulder County Voter Details' entry type
// API to search for entries of type Boulder County Voter Details
func (s *TypeBoulderCountyVoterDetails) SearchBoulderCountyVoterDetails(ctx context.Context, request operations.SearchBoulderCountyVoterDetailsRequest) (*operations.SearchBoulderCountyVoterDetailsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/repository/search/type/boulder_county_voter_details"

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

	res := &operations.SearchBoulderCountyVoterDetailsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
