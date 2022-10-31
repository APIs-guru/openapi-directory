package operations

import (
"time"
"openapi/pkg/models/shared")


type GetSchedulesScheduleECandidateOfficeEnum string

const (
    GetSchedulesScheduleECandidateOfficeEnumUnknown GetSchedulesScheduleECandidateOfficeEnum = ""
GetSchedulesScheduleECandidateOfficeEnumH GetSchedulesScheduleECandidateOfficeEnum = "H"
GetSchedulesScheduleECandidateOfficeEnumS GetSchedulesScheduleECandidateOfficeEnum = "S"
GetSchedulesScheduleECandidateOfficeEnumP GetSchedulesScheduleECandidateOfficeEnum = "P"
)



type GetSchedulesScheduleESupportOpposeIndicatorEnum string

const (
    GetSchedulesScheduleESupportOpposeIndicatorEnumS GetSchedulesScheduleESupportOpposeIndicatorEnum = "S"
GetSchedulesScheduleESupportOpposeIndicatorEnumO GetSchedulesScheduleESupportOpposeIndicatorEnum = "O"
)


type GetSchedulesScheduleEQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    CandidateID []string `queryParam:"style=form,explode=true,name=candidate_id"`
    CandidateOffice []GetSchedulesScheduleECandidateOfficeEnum `queryParam:"style=form,explode=true,name=candidate_office"`
    CandidateOfficeDistrict []string `queryParam:"style=form,explode=true,name=candidate_office_district"`
    CandidateOfficeState []string `queryParam:"style=form,explode=true,name=candidate_office_state"`
    CandidateParty []string `queryParam:"style=form,explode=true,name=candidate_party"`
    CommitteeID []string `queryParam:"style=form,explode=true,name=committee_id"`
    Cycle []int32 `queryParam:"style=form,explode=true,name=cycle"`
    FilingForm []string `queryParam:"style=form,explode=true,name=filing_form"`
    ImageNumber []string `queryParam:"style=form,explode=true,name=image_number"`
    IsNotice []bool `queryParam:"style=form,explode=true,name=is_notice"`
    LastExpenditureAmount *float32 `queryParam:"style=form,explode=true,name=last_expenditure_amount"`
    LastExpenditureDate *time.Time `queryParam:"style=form,explode=true,name=last_expenditure_date"`
    LastIndex *int32 `queryParam:"style=form,explode=true,name=last_index"`
    LastOfficeTotalYtd *float32 `queryParam:"style=form,explode=true,name=last_office_total_ytd"`
    LastSupportOpposeIndicator *string `queryParam:"style=form,explode=true,name=last_support_oppose_indicator"`
    LineNumber *string `queryParam:"style=form,explode=true,name=line_number"`
    MaxAmount *string `queryParam:"style=form,explode=true,name=max_amount"`
    MaxDate *time.Time `queryParam:"style=form,explode=true,name=max_date"`
    MaxDisseminationDate *time.Time `queryParam:"style=form,explode=true,name=max_dissemination_date"`
    MaxFilingDate *time.Time `queryParam:"style=form,explode=true,name=max_filing_date"`
    MaxImageNumber *string `queryParam:"style=form,explode=true,name=max_image_number"`
    MinAmount *string `queryParam:"style=form,explode=true,name=min_amount"`
    MinDate *time.Time `queryParam:"style=form,explode=true,name=min_date"`
    MinDisseminationDate *time.Time `queryParam:"style=form,explode=true,name=min_dissemination_date"`
    MinFilingDate *time.Time `queryParam:"style=form,explode=true,name=min_filing_date"`
    MinImageNumber *string `queryParam:"style=form,explode=true,name=min_image_number"`
    MostRecent *bool `queryParam:"style=form,explode=true,name=most_recent"`
    PayeeName []string `queryParam:"style=form,explode=true,name=payee_name"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    SupportOpposeIndicator []GetSchedulesScheduleESupportOpposeIndicatorEnum `queryParam:"style=form,explode=true,name=support_oppose_indicator"`
    
}

type GetSchedulesScheduleERequest struct {
    QueryParams GetSchedulesScheduleEQueryParams 
    
}

type GetSchedulesScheduleEResponse struct {
    ContentType string 
    ScheduleEPage *shared.ScheduleEPage 
    StatusCode int64 
    
}

