package operations

import (
"time"
"openapi/pkg/models/shared")

type GetSchedulesScheduleBSubIDPathParams struct {
    SubID string `pathParam:"style=simple,explode=false,name=sub_id"`
    
}


type GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnum string

const (
    GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnumUnknown GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnum = ""
GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnumA GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnum = "A"
GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnumJ GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnum = "J"
GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnumP GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnum = "P"
GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnumU GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnum = "U"
GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnumB GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnum = "B"
GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnumD GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnum = "D"
)



type GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnum string

const (
    GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnumUnknown GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnum = ""
GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnumC GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnum = "C"
GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnumL GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnum = "L"
GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnumM GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnum = "M"
GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnumT GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnum = "T"
GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnumV GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnum = "V"
GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnumW GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnum = "W"
)



type GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum string

const (
    GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumUnknown GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = ""
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumC GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "C"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumD GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "D"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumE GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "E"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumH GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "H"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumI GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "I"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumN GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "N"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumO GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "O"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumP GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "P"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumQ GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "Q"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumS GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "S"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumU GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "U"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumV GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "V"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumW GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "W"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumX GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "X"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumY GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "Y"
GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnumZ GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum = "Z"
)


type GetSchedulesScheduleBSubIDQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    CommitteeID []string `queryParam:"style=form,explode=true,name=committee_id"`
    DisbursementDescription []string `queryParam:"style=form,explode=true,name=disbursement_description"`
    DisbursementPurposeCategory []string `queryParam:"style=form,explode=true,name=disbursement_purpose_category"`
    ImageNumber []string `queryParam:"style=form,explode=true,name=image_number"`
    LastDisbursementAmount *float32 `queryParam:"style=form,explode=true,name=last_disbursement_amount"`
    LastDisbursementDate *time.Time `queryParam:"style=form,explode=true,name=last_disbursement_date"`
    LastIndex *int32 `queryParam:"style=form,explode=true,name=last_index"`
    LineNumber *string `queryParam:"style=form,explode=true,name=line_number"`
    MaxAmount *string `queryParam:"style=form,explode=true,name=max_amount"`
    MaxDate *time.Time `queryParam:"style=form,explode=true,name=max_date"`
    MaxImageNumber *string `queryParam:"style=form,explode=true,name=max_image_number"`
    MinAmount *string `queryParam:"style=form,explode=true,name=min_amount"`
    MinDate *time.Time `queryParam:"style=form,explode=true,name=min_date"`
    MinImageNumber *string `queryParam:"style=form,explode=true,name=min_image_number"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    RecipientCity []string `queryParam:"style=form,explode=true,name=recipient_city"`
    RecipientCommitteeID []string `queryParam:"style=form,explode=true,name=recipient_committee_id"`
    RecipientName []string `queryParam:"style=form,explode=true,name=recipient_name"`
    RecipientState []string `queryParam:"style=form,explode=true,name=recipient_state"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SpenderCommitteeDesignation []GetSchedulesScheduleBSubIDSpenderCommitteeDesignationEnum `queryParam:"style=form,explode=true,name=spender_committee_designation"`
    SpenderCommitteeOrgType []GetSchedulesScheduleBSubIDSpenderCommitteeOrgTypeEnum `queryParam:"style=form,explode=true,name=spender_committee_org_type"`
    SpenderCommitteeType []GetSchedulesScheduleBSubIDSpenderCommitteeTypeEnum `queryParam:"style=form,explode=true,name=spender_committee_type"`
    TwoYearTransactionPeriod []int32 `queryParam:"style=form,explode=true,name=two_year_transaction_period"`
    
}

type GetSchedulesScheduleBSubIDRequest struct {
    PathParams GetSchedulesScheduleBSubIDPathParams 
    QueryParams GetSchedulesScheduleBSubIDQueryParams 
    
}

type GetSchedulesScheduleBSubIDResponse struct {
    ContentType string 
    ScheduleBPage *shared.ScheduleBPage 
    StatusCode int64 
    
}

