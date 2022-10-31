package operations

import (
	"openapi/pkg/models/shared"
)

type GetPresidentialContributionsByCandidateQueryParams struct {
	APIKey           string   `queryParam:"style=form,explode=true,name=api_key"`
	ContributorState []string `queryParam:"style=form,explode=true,name=contributor_state"`
	ElectionYear     []int32  `queryParam:"style=form,explode=true,name=election_year"`
	Page             *int32   `queryParam:"style=form,explode=true,name=page"`
	PerPage          *int32   `queryParam:"style=form,explode=true,name=per_page"`
	Sort             *string  `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull     *bool    `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly     *bool    `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast    *bool    `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetPresidentialContributionsByCandidateRequest struct {
	QueryParams GetPresidentialContributionsByCandidateQueryParams
}

type GetPresidentialContributionsByCandidateResponse struct {
	ContentType                 string
	PresidentialByCandidatePage *shared.PresidentialByCandidatePage
	StatusCode                  int64
}
