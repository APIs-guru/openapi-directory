package operations

import (
"openapi/pkg/models/shared")


type GetTotalsEntityTypeEntityTypeEnum string

const (
    GetTotalsEntityTypeEntityTypeEnumPresidential GetTotalsEntityTypeEntityTypeEnum = "presidential"
GetTotalsEntityTypeEntityTypeEnumPac GetTotalsEntityTypeEntityTypeEnum = "pac"
GetTotalsEntityTypeEntityTypeEnumParty GetTotalsEntityTypeEntityTypeEnum = "party"
GetTotalsEntityTypeEntityTypeEnumPacParty GetTotalsEntityTypeEntityTypeEnum = "pac-party"
GetTotalsEntityTypeEntityTypeEnumHouseSenate GetTotalsEntityTypeEntityTypeEnum = "house-senate"
GetTotalsEntityTypeEntityTypeEnumIeOnly GetTotalsEntityTypeEntityTypeEnum = "ie-only"
)


type GetTotalsEntityTypePathParams struct {
    EntityType GetTotalsEntityTypeEntityTypeEnum `pathParam:"style=simple,explode=false,name=entity_type"`
    
}


type GetTotalsEntityTypeFilingFrequencyEnum string

const (
    GetTotalsEntityTypeFilingFrequencyEnumUnknown GetTotalsEntityTypeFilingFrequencyEnum = ""
GetTotalsEntityTypeFilingFrequencyEnumA GetTotalsEntityTypeFilingFrequencyEnum = "A"
GetTotalsEntityTypeFilingFrequencyEnumM GetTotalsEntityTypeFilingFrequencyEnum = "M"
GetTotalsEntityTypeFilingFrequencyEnumN GetTotalsEntityTypeFilingFrequencyEnum = "N"
GetTotalsEntityTypeFilingFrequencyEnumQ GetTotalsEntityTypeFilingFrequencyEnum = "Q"
GetTotalsEntityTypeFilingFrequencyEnumT GetTotalsEntityTypeFilingFrequencyEnum = "T"
GetTotalsEntityTypeFilingFrequencyEnumW GetTotalsEntityTypeFilingFrequencyEnum = "W"
GetTotalsEntityTypeFilingFrequencyEnumMinusA GetTotalsEntityTypeFilingFrequencyEnum = "-A"
GetTotalsEntityTypeFilingFrequencyEnumMinusT GetTotalsEntityTypeFilingFrequencyEnum = "-T"
)



type GetTotalsEntityTypeOrganizationTypeEnum string

const (
    GetTotalsEntityTypeOrganizationTypeEnumUnknown GetTotalsEntityTypeOrganizationTypeEnum = ""
GetTotalsEntityTypeOrganizationTypeEnumC GetTotalsEntityTypeOrganizationTypeEnum = "C"
GetTotalsEntityTypeOrganizationTypeEnumL GetTotalsEntityTypeOrganizationTypeEnum = "L"
GetTotalsEntityTypeOrganizationTypeEnumM GetTotalsEntityTypeOrganizationTypeEnum = "M"
GetTotalsEntityTypeOrganizationTypeEnumT GetTotalsEntityTypeOrganizationTypeEnum = "T"
GetTotalsEntityTypeOrganizationTypeEnumV GetTotalsEntityTypeOrganizationTypeEnum = "V"
GetTotalsEntityTypeOrganizationTypeEnumW GetTotalsEntityTypeOrganizationTypeEnum = "W"
)


type GetTotalsEntityTypeQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    CommitteeDesignation []string `queryParam:"style=form,explode=true,name=committee_designation"`
    CommitteeID *string `queryParam:"style=form,explode=true,name=committee_id"`
    CommitteeState []string `queryParam:"style=form,explode=true,name=committee_state"`
    CommitteeType []string `queryParam:"style=form,explode=true,name=committee_type"`
    Cycle []int32 `queryParam:"style=form,explode=true,name=cycle"`
    FilingFrequency []GetTotalsEntityTypeFilingFrequencyEnum `queryParam:"style=form,explode=true,name=filing_frequency"`
    MaxDisbursements *string `queryParam:"style=form,explode=true,name=max_disbursements"`
    MaxLastCashOnHandEndPeriod *string `queryParam:"style=form,explode=true,name=max_last_cash_on_hand_end_period"`
    MaxLastDebtsOwedByCommittee *string `queryParam:"style=form,explode=true,name=max_last_debts_owed_by_committee"`
    MaxReceipts *string `queryParam:"style=form,explode=true,name=max_receipts"`
    MinDisbursements *string `queryParam:"style=form,explode=true,name=min_disbursements"`
    MinLastCashOnHandEndPeriod *string `queryParam:"style=form,explode=true,name=min_last_cash_on_hand_end_period"`
    MinLastDebtsOwedByCommittee *string `queryParam:"style=form,explode=true,name=min_last_debts_owed_by_committee"`
    MinReceipts *string `queryParam:"style=form,explode=true,name=min_receipts"`
    OrganizationType []GetTotalsEntityTypeOrganizationTypeEnum `queryParam:"style=form,explode=true,name=organization_type"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    SponsorCandidateID []string `queryParam:"style=form,explode=true,name=sponsor_candidate_id"`
    TreasurerName []string `queryParam:"style=form,explode=true,name=treasurer_name"`
    
}

type GetTotalsEntityTypeRequest struct {
    PathParams GetTotalsEntityTypePathParams 
    QueryParams GetTotalsEntityTypeQueryParams 
    
}

type GetTotalsEntityTypeResponse struct {
    CommitteeTotalsPage *shared.CommitteeTotalsPage 
    ContentType string 
    StatusCode int64 
    
}

