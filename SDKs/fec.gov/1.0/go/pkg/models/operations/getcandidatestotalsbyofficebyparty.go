package operations

import (
	"openapi/pkg/models/shared"
)

type GetCandidatesTotalsByOfficeByPartyOfficeEnum string

const (
	GetCandidatesTotalsByOfficeByPartyOfficeEnumUnknown GetCandidatesTotalsByOfficeByPartyOfficeEnum = ""
	GetCandidatesTotalsByOfficeByPartyOfficeEnumH       GetCandidatesTotalsByOfficeByPartyOfficeEnum = "H"
	GetCandidatesTotalsByOfficeByPartyOfficeEnumS       GetCandidatesTotalsByOfficeByPartyOfficeEnum = "S"
	GetCandidatesTotalsByOfficeByPartyOfficeEnumP       GetCandidatesTotalsByOfficeByPartyOfficeEnum = "P"
)

type GetCandidatesTotalsByOfficeByPartyQueryParams struct {
	APIKey            string                                        `queryParam:"style=form,explode=true,name=api_key"`
	ElectionYear      []int32                                       `queryParam:"style=form,explode=true,name=election_year"`
	IsActiveCandidate *bool                                         `queryParam:"style=form,explode=true,name=is_active_candidate"`
	Office            *GetCandidatesTotalsByOfficeByPartyOfficeEnum `queryParam:"style=form,explode=true,name=office"`
	Page              *int32                                        `queryParam:"style=form,explode=true,name=page"`
	PerPage           *int32                                        `queryParam:"style=form,explode=true,name=per_page"`
	Sort              *string                                       `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull      *bool                                         `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly      *bool                                         `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast     *bool                                         `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetCandidatesTotalsByOfficeByPartyRequest struct {
	QueryParams GetCandidatesTotalsByOfficeByPartyQueryParams
}

type GetCandidatesTotalsByOfficeByPartyResponse struct {
	ContentType              string
	StatusCode               int64
	TotalByOfficeByPartyPage *shared.TotalByOfficeByPartyPage
}
