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

type Committee struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCommittee(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Committee {
	return &Committee{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCandidateCandidateIDCommittees -
// This endpoint is useful for finding detailed information about a particular committee or
// filer. Use the `committee_id` to find the most recent information about the committee.
func (s *Committee) GetCandidateCandidateIDCommittees(ctx context.Context, request operations.GetCandidateCandidateIDCommitteesRequest) (*operations.GetCandidateCandidateIDCommitteesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/candidate/{candidate_id}/committees/", request.PathParams)

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

	res := &operations.GetCandidateCandidateIDCommitteesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommitteeDetailPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommitteeDetailPage = out
		}
	}

	return res, nil
}

// GetCandidateCandidateIDCommitteesHistory -
// Explore a filer's characteristics over time. This can be particularly useful if the
// committees change treasurers, designation, or `committee_type`.
func (s *Committee) GetCandidateCandidateIDCommitteesHistory(ctx context.Context, request operations.GetCandidateCandidateIDCommitteesHistoryRequest) (*operations.GetCandidateCandidateIDCommitteesHistoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/candidate/{candidate_id}/committees/history/", request.PathParams)

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

	res := &operations.GetCandidateCandidateIDCommitteesHistoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommitteeHistoryPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommitteeHistoryPage = out
		}
	}

	return res, nil
}

// GetCandidateCandidateIDCommitteesHistoryCycle -
// Explore a filer's characteristics over time. This can be particularly useful if the
// committees change treasurers, designation, or `committee_type`.
func (s *Committee) GetCandidateCandidateIDCommitteesHistoryCycle(ctx context.Context, request operations.GetCandidateCandidateIDCommitteesHistoryCycleRequest) (*operations.GetCandidateCandidateIDCommitteesHistoryCycleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/candidate/{candidate_id}/committees/history/{cycle}/", request.PathParams)

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

	res := &operations.GetCandidateCandidateIDCommitteesHistoryCycleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommitteeHistoryPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommitteeHistoryPage = out
		}
	}

	return res, nil
}

// GetCommitteeCommitteeID -
// This endpoint is useful for finding detailed information about a particular committee or
// filer. Use the `committee_id` to find the most recent information about the committee.
func (s *Committee) GetCommitteeCommitteeID(ctx context.Context, request operations.GetCommitteeCommitteeIDRequest) (*operations.GetCommitteeCommitteeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/committee/{committee_id}/", request.PathParams)

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

	res := &operations.GetCommitteeCommitteeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommitteeDetailPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommitteeDetailPage = out
		}
	}

	return res, nil
}

// GetCommitteeCommitteeIDHistory -
// Explore a filer's characteristics over time. This can be particularly useful if the
// committees change treasurers, designation, or `committee_type`.
func (s *Committee) GetCommitteeCommitteeIDHistory(ctx context.Context, request operations.GetCommitteeCommitteeIDHistoryRequest) (*operations.GetCommitteeCommitteeIDHistoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/committee/{committee_id}/history/", request.PathParams)

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

	res := &operations.GetCommitteeCommitteeIDHistoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommitteeHistoryPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommitteeHistoryPage = out
		}
	}

	return res, nil
}

// GetCommitteeCommitteeIDHistoryCycle -
// Explore a filer's characteristics over time. This can be particularly useful if the
// committees change treasurers, designation, or `committee_type`.
func (s *Committee) GetCommitteeCommitteeIDHistoryCycle(ctx context.Context, request operations.GetCommitteeCommitteeIDHistoryCycleRequest) (*operations.GetCommitteeCommitteeIDHistoryCycleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/committee/{committee_id}/history/{cycle}/", request.PathParams)

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

	res := &operations.GetCommitteeCommitteeIDHistoryCycleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommitteeHistoryPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommitteeHistoryPage = out
		}
	}

	return res, nil
}

// GetCommittees -
// Fetch basic information about committees and filers. Use parameters to filter for
// particular characteristics.
func (s *Committee) GetCommittees(ctx context.Context, request operations.GetCommitteesRequest) (*operations.GetCommitteesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/committees/"

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

	res := &operations.GetCommitteesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommitteePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommitteePage = out
		}
	}

	return res, nil
}
