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

type CommunicationCost struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCommunicationCost(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CommunicationCost {
	return &CommunicationCost{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCommunicationCosts -
// 52 U.S.C. 30118 allows "communications by a corporation to its stockholders and executive or administrative personnel and their families or by a labor organization to its members and their families on any subject," including the express advocacy of the election or defeat of any Federal candidate.  The costs of such communications must be reported to the Federal Election Commission under certain circumstances.
func (s *CommunicationCost) GetCommunicationCosts(ctx context.Context, request operations.GetCommunicationCostsRequest) (*operations.GetCommunicationCostsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/communication_costs/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCommunicationCostsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommunicationCostPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommunicationCostPage = out
		}
	}

	return res, nil
}

// GetCommunicationCostsAggregates - Communication cost aggregated by candidate ID and committee ID.
func (s *CommunicationCost) GetCommunicationCostsAggregates(ctx context.Context, request operations.GetCommunicationCostsAggregatesRequest) (*operations.GetCommunicationCostsAggregatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/communication_costs/aggregates/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCommunicationCostsAggregatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommunicationCostByCandidatePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommunicationCostByCandidatePage = out
		}
	}

	return res, nil
}

// GetCommunicationCostsByCandidate - Communication cost aggregated by candidate ID and committee ID.
func (s *CommunicationCost) GetCommunicationCostsByCandidate(ctx context.Context, request operations.GetCommunicationCostsByCandidateRequest) (*operations.GetCommunicationCostsByCandidateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/communication_costs/by_candidate/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCommunicationCostsByCandidateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommunicationCostByCandidatePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommunicationCostByCandidatePage = out
		}
	}

	return res, nil
}

// GetCommunicationCostsTotalsByCandidate -
// Total communications costs aggregated across committees on supported or opposed candidates by cycle or candidate election year.
func (s *CommunicationCost) GetCommunicationCostsTotalsByCandidate(ctx context.Context, request operations.GetCommunicationCostsTotalsByCandidateRequest) (*operations.GetCommunicationCostsTotalsByCandidateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/communication_costs/totals/by_candidate/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCommunicationCostsTotalsByCandidateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CcTotalsByCandidatePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CcTotalsByCandidatePage = out
		}
	}

	return res, nil
}
