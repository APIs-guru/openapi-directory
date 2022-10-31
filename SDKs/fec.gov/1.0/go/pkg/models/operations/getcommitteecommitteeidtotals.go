package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommitteeCommitteeIDTotalsPathParams struct {
	CommitteeID string `pathParam:"style=simple,explode=false,name=committee_id"`
}

type GetCommitteeCommitteeIDTotalsQueryParams struct {
	APIKey        string  `queryParam:"style=form,explode=true,name=api_key"`
	Cycle         []int32 `queryParam:"style=form,explode=true,name=cycle"`
	Page          *int32  `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32  `queryParam:"style=form,explode=true,name=per_page"`
	Sort          *string `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool   `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool   `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool   `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetCommitteeCommitteeIDTotalsRequest struct {
	PathParams  GetCommitteeCommitteeIDTotalsPathParams
	QueryParams GetCommitteeCommitteeIDTotalsQueryParams
}

type GetCommitteeCommitteeIDTotalsResponse struct {
	CommitteeTotalsPage *shared.CommitteeTotalsPage
	ContentType         string
	StatusCode          int64
}
