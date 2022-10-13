package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchedulesScheduleEByCandidateOfficeEnum string

const (
	GetSchedulesScheduleEByCandidateOfficeEnumHouse     GetSchedulesScheduleEByCandidateOfficeEnum = "house"
	GetSchedulesScheduleEByCandidateOfficeEnumSenate    GetSchedulesScheduleEByCandidateOfficeEnum = "senate"
	GetSchedulesScheduleEByCandidateOfficeEnumPresident GetSchedulesScheduleEByCandidateOfficeEnum = "president"
)

type GetSchedulesScheduleEByCandidateSupportOpposeEnum string

const (
	GetSchedulesScheduleEByCandidateSupportOpposeEnumS GetSchedulesScheduleEByCandidateSupportOpposeEnum = "S"
	GetSchedulesScheduleEByCandidateSupportOpposeEnumO GetSchedulesScheduleEByCandidateSupportOpposeEnum = "O"
)

type GetSchedulesScheduleEByCandidateQueryParams struct {
	APIKey        string                                             `queryParam:"style=form,explode=true,name=api_key"`
	CandidateID   []string                                           `queryParam:"style=form,explode=true,name=candidate_id"`
	CommitteeID   []string                                           `queryParam:"style=form,explode=true,name=committee_id"`
	Cycle         []int32                                            `queryParam:"style=form,explode=true,name=cycle"`
	District      *string                                            `queryParam:"style=form,explode=true,name=district"`
	ElectionFull  *bool                                              `queryParam:"style=form,explode=true,name=election_full"`
	Office        *GetSchedulesScheduleEByCandidateOfficeEnum        `queryParam:"style=form,explode=true,name=office"`
	Page          *int32                                             `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32                                             `queryParam:"style=form,explode=true,name=per_page"`
	Sort          *string                                            `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool                                              `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool                                              `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool                                              `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	State         *string                                            `queryParam:"style=form,explode=true,name=state"`
	SupportOppose *GetSchedulesScheduleEByCandidateSupportOpposeEnum `queryParam:"style=form,explode=true,name=support_oppose"`
}

type GetSchedulesScheduleEByCandidateRequest struct {
	QueryParams GetSchedulesScheduleEByCandidateQueryParams
}

type GetSchedulesScheduleEByCandidateResponse struct {
	ContentType              string
	ScheduleEByCandidatePage *shared.ScheduleEByCandidatePage
	StatusCode               int64
}
