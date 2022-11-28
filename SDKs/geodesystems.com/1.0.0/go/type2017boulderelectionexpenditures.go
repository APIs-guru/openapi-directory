package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Type2017BoulderElectionExpenditures struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewType2017BoulderElectionExpenditures(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Type2017BoulderElectionExpenditures {
	return &Type2017BoulderElectionExpenditures{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// Search2017BoulderElectionExpenditures - Search API for '2017 Boulder Election Expenditures' entry type
// API to search for entries of type 2017 Boulder Election Expenditures
func (s *Type2017BoulderElectionExpenditures) Search2017BoulderElectionExpenditures(ctx context.Context, request operations.Search2017BoulderElectionExpendituresRequest) (*operations.Search2017BoulderElectionExpendituresResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/repository/search/type/2017_boulder_election_expenditures"

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

	res := &operations.Search2017BoulderElectionExpendituresResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
