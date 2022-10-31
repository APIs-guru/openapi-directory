package operations

import (
	"openapi/pkg/models/shared"
)

type GetCandidateCandidateIDHistoryCyclePathParams struct {
	CandidateID string `pathParam:"style=simple,explode=false,name=candidate_id"`
	Cycle       int32  `pathParam:"style=simple,explode=false,name=cycle"`
}

type GetCandidateCandidateIDHistoryCycleQueryParams struct {
	APIKey        string  `queryParam:"style=form,explode=true,name=api_key"`
	ElectionFull  *bool   `queryParam:"style=form,explode=true,name=election_full"`
	Page          *int32  `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32  `queryParam:"style=form,explode=true,name=per_page"`
	Sort          *string `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool   `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool   `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool   `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetCandidateCandidateIDHistoryCycleRequest struct {
	PathParams  GetCandidateCandidateIDHistoryCyclePathParams
	QueryParams GetCandidateCandidateIDHistoryCycleQueryParams
}

type GetCandidateCandidateIDHistoryCycleResponse struct {
	CandidateHistoryPage *shared.CandidateHistoryPage
	ContentType          string
	StatusCode           int64
}
