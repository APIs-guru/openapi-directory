package operations

import (
	"openapi/pkg/models/shared"
)

type GetCandidatesTotalsByOfficeOfficeEnum string

const (
	GetCandidatesTotalsByOfficeOfficeEnumUnknown GetCandidatesTotalsByOfficeOfficeEnum = ""
	GetCandidatesTotalsByOfficeOfficeEnumH       GetCandidatesTotalsByOfficeOfficeEnum = "H"
	GetCandidatesTotalsByOfficeOfficeEnumS       GetCandidatesTotalsByOfficeOfficeEnum = "S"
	GetCandidatesTotalsByOfficeOfficeEnumP       GetCandidatesTotalsByOfficeOfficeEnum = "P"
)

type GetCandidatesTotalsByOfficeQueryParams struct {
	APIKey            string                                 `queryParam:"style=form,explode=true,name=api_key"`
	ElectionYear      []int32                                `queryParam:"style=form,explode=true,name=election_year"`
	IsActiveCandidate *bool                                  `queryParam:"style=form,explode=true,name=is_active_candidate"`
	Office            *GetCandidatesTotalsByOfficeOfficeEnum `queryParam:"style=form,explode=true,name=office"`
	Page              *int32                                 `queryParam:"style=form,explode=true,name=page"`
	PerPage           *int32                                 `queryParam:"style=form,explode=true,name=per_page"`
	Sort              *string                                `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull      *bool                                  `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly      *bool                                  `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast     *bool                                  `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetCandidatesTotalsByOfficeRequest struct {
	QueryParams GetCandidatesTotalsByOfficeQueryParams
}

type GetCandidatesTotalsByOfficeResponse struct {
	ContentType       string
	StatusCode        int64
	TotalByOfficePage *shared.TotalByOfficePage
}
