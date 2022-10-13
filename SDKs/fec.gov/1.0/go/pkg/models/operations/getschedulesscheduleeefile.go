package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSchedulesScheduleEEfileCandidateOfficeEnum string

const (
	GetSchedulesScheduleEEfileCandidateOfficeEnumUnknown GetSchedulesScheduleEEfileCandidateOfficeEnum = ""
	GetSchedulesScheduleEEfileCandidateOfficeEnumH       GetSchedulesScheduleEEfileCandidateOfficeEnum = "H"
	GetSchedulesScheduleEEfileCandidateOfficeEnumS       GetSchedulesScheduleEEfileCandidateOfficeEnum = "S"
	GetSchedulesScheduleEEfileCandidateOfficeEnumP       GetSchedulesScheduleEEfileCandidateOfficeEnum = "P"
)

type GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum string

const (
	GetSchedulesScheduleEEfileSupportOpposeIndicatorEnumS GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum = "S"
	GetSchedulesScheduleEEfileSupportOpposeIndicatorEnumO GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum = "O"
)

type GetSchedulesScheduleEEfileQueryParams struct {
	APIKey                  string                                                 `queryParam:"style=form,explode=true,name=api_key"`
	CandidateID             []string                                               `queryParam:"style=form,explode=true,name=candidate_id"`
	CandidateOffice         *GetSchedulesScheduleEEfileCandidateOfficeEnum         `queryParam:"style=form,explode=true,name=candidate_office"`
	CandidateOfficeDistrict []string                                               `queryParam:"style=form,explode=true,name=candidate_office_district"`
	CandidateOfficeState    []string                                               `queryParam:"style=form,explode=true,name=candidate_office_state"`
	CandidateParty          []string                                               `queryParam:"style=form,explode=true,name=candidate_party"`
	CandidateSearch         []string                                               `queryParam:"style=form,explode=true,name=candidate_search"`
	CommitteeID             []string                                               `queryParam:"style=form,explode=true,name=committee_id"`
	FilingForm              []string                                               `queryParam:"style=form,explode=true,name=filing_form"`
	ImageNumber             []string                                               `queryParam:"style=form,explode=true,name=image_number"`
	IsNotice                *bool                                                  `queryParam:"style=form,explode=true,name=is_notice"`
	MaxDisseminationDate    *time.Time                                             `queryParam:"style=form,explode=true,name=max_dissemination_date"`
	MaxExpenditureAmount    *int32                                                 `queryParam:"style=form,explode=true,name=max_expenditure_amount"`
	MaxExpenditureDate      *time.Time                                             `queryParam:"style=form,explode=true,name=max_expenditure_date"`
	MaxFiledDate            *time.Time                                             `queryParam:"style=form,explode=true,name=max_filed_date"`
	MinDisseminationDate    *time.Time                                             `queryParam:"style=form,explode=true,name=min_dissemination_date"`
	MinExpenditureAmount    *int32                                                 `queryParam:"style=form,explode=true,name=min_expenditure_amount"`
	MinExpenditureDate      *time.Time                                             `queryParam:"style=form,explode=true,name=min_expenditure_date"`
	MinFiledDate            *time.Time                                             `queryParam:"style=form,explode=true,name=min_filed_date"`
	MostRecent              *bool                                                  `queryParam:"style=form,explode=true,name=most_recent"`
	Page                    *int32                                                 `queryParam:"style=form,explode=true,name=page"`
	PayeeName               []string                                               `queryParam:"style=form,explode=true,name=payee_name"`
	PerPage                 *int32                                                 `queryParam:"style=form,explode=true,name=per_page"`
	Sort                    *string                                                `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull            *bool                                                  `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly            *bool                                                  `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast           *bool                                                  `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	SpenderName             []string                                               `queryParam:"style=form,explode=true,name=spender_name"`
	SupportOpposeIndicator  []GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum `queryParam:"style=form,explode=true,name=support_oppose_indicator"`
}

type GetSchedulesScheduleEEfileRequest struct {
	QueryParams GetSchedulesScheduleEEfileQueryParams
}

type GetSchedulesScheduleEEfileResponse struct {
	ContentType        string
	ScheduleEEfilePage *shared.ScheduleEEfilePage
	StatusCode         int64
}
