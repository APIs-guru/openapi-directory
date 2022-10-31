package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetElectioneeringQueryParams struct {
	APIKey        string     `queryParam:"style=form,explode=true,name=api_key"`
	CandidateID   []string   `queryParam:"style=form,explode=true,name=candidate_id"`
	CommitteeID   []string   `queryParam:"style=form,explode=true,name=committee_id"`
	Description   *string    `queryParam:"style=form,explode=true,name=description"`
	LastIndex     *int32     `queryParam:"style=form,explode=true,name=last_index"`
	MaxAmount     *string    `queryParam:"style=form,explode=true,name=max_amount"`
	MaxDate       *time.Time `queryParam:"style=form,explode=true,name=max_date"`
	MinAmount     *string    `queryParam:"style=form,explode=true,name=min_amount"`
	MinDate       *time.Time `queryParam:"style=form,explode=true,name=min_date"`
	Page          *int32     `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32     `queryParam:"style=form,explode=true,name=per_page"`
	ReportYear    []int32    `queryParam:"style=form,explode=true,name=report_year"`
	Sort          *string    `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool      `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool      `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool      `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetElectioneeringRequest struct {
	QueryParams GetElectioneeringQueryParams
}

type GetElectioneeringResponse struct {
	ContentType        string
	ElectioneeringPage *shared.ElectioneeringPage
	StatusCode         int64
}
