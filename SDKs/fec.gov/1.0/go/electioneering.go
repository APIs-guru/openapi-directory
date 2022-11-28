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

type Electioneering struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewElectioneering(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Electioneering {
	return &Electioneering{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetElectioneering -
// An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:
//
// _The communication refers to a clearly identified federal candidate._
//
// _The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._
//
// _The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._
func (s *Electioneering) GetElectioneering(ctx context.Context, request operations.GetElectioneeringRequest) (*operations.GetElectioneeringResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/electioneering/"

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

	res := &operations.GetElectioneeringResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ElectioneeringPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ElectioneeringPage = out
		}
	}

	return res, nil
}

// GetElectioneeringAggregates - Electioneering communications costs aggregates
func (s *Electioneering) GetElectioneeringAggregates(ctx context.Context, request operations.GetElectioneeringAggregatesRequest) (*operations.GetElectioneeringAggregatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/electioneering/aggregates/"

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

	res := &operations.GetElectioneeringAggregatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ElectioneeringByCandidatePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ElectioneeringByCandidatePage = out
		}
	}

	return res, nil
}

// GetElectioneeringByCandidate - Electioneering costs aggregated by candidate
func (s *Electioneering) GetElectioneeringByCandidate(ctx context.Context, request operations.GetElectioneeringByCandidateRequest) (*operations.GetElectioneeringByCandidateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/electioneering/by_candidate/"

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

	res := &operations.GetElectioneeringByCandidateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ElectioneeringByCandidatePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ElectioneeringByCandidatePage = out
		}
	}

	return res, nil
}

// GetElectioneeringTotalsByCandidate -
// Total electioneering communications spent on candidates by cycle
// or candidate election year
func (s *Electioneering) GetElectioneeringTotalsByCandidate(ctx context.Context, request operations.GetElectioneeringTotalsByCandidateRequest) (*operations.GetElectioneeringTotalsByCandidateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/electioneering/totals/by_candidate/"

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

	res := &operations.GetElectioneeringTotalsByCandidateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EcTotalsByCandidatePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EcTotalsByCandidatePage = out
		}
	}

	return res, nil
}
