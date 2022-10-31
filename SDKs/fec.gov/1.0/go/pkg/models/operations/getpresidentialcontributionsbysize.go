package operations

import (
	"openapi/pkg/models/shared"
)

type GetPresidentialContributionsBySizeQueryParams struct {
	APIKey        string   `queryParam:"style=form,explode=true,name=api_key"`
	CandidateID   []string `queryParam:"style=form,explode=true,name=candidate_id"`
	ElectionYear  []int32  `queryParam:"style=form,explode=true,name=election_year"`
	Page          *int32   `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32   `queryParam:"style=form,explode=true,name=per_page"`
	Size          []int32  `queryParam:"style=form,explode=true,name=size"`
	Sort          *string  `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool    `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool    `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool    `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetPresidentialContributionsBySizeRequest struct {
	QueryParams GetPresidentialContributionsBySizeQueryParams
}

type GetPresidentialContributionsBySizeResponse struct {
	ContentType            string
	PresidentialBySizePage *shared.PresidentialBySizePage
	StatusCode             int64
}
