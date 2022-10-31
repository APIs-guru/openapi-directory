package operations

import (
"openapi/pkg/models/shared")

type GetCandidateCandidateIDCommitteesPathParams struct {
    CandidateID string `pathParam:"style=simple,explode=false,name=candidate_id"`
    
}


type GetCandidateCandidateIDCommitteesCommitteeTypeEnum string

const (
    GetCandidateCandidateIDCommitteesCommitteeTypeEnumUnknown GetCandidateCandidateIDCommitteesCommitteeTypeEnum = ""
GetCandidateCandidateIDCommitteesCommitteeTypeEnumC GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "C"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumD GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "D"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumE GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "E"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumH GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "H"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumI GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "I"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumN GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "N"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumO GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "O"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumP GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "P"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumQ GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "Q"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumS GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "S"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumU GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "U"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumV GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "V"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumW GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "W"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumX GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "X"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumY GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "Y"
GetCandidateCandidateIDCommitteesCommitteeTypeEnumZ GetCandidateCandidateIDCommitteesCommitteeTypeEnum = "Z"
)



type GetCandidateCandidateIDCommitteesDesignationEnum string

const (
    GetCandidateCandidateIDCommitteesDesignationEnumUnknown GetCandidateCandidateIDCommitteesDesignationEnum = ""
GetCandidateCandidateIDCommitteesDesignationEnumA GetCandidateCandidateIDCommitteesDesignationEnum = "A"
GetCandidateCandidateIDCommitteesDesignationEnumJ GetCandidateCandidateIDCommitteesDesignationEnum = "J"
GetCandidateCandidateIDCommitteesDesignationEnumP GetCandidateCandidateIDCommitteesDesignationEnum = "P"
GetCandidateCandidateIDCommitteesDesignationEnumU GetCandidateCandidateIDCommitteesDesignationEnum = "U"
GetCandidateCandidateIDCommitteesDesignationEnumB GetCandidateCandidateIDCommitteesDesignationEnum = "B"
GetCandidateCandidateIDCommitteesDesignationEnumD GetCandidateCandidateIDCommitteesDesignationEnum = "D"
)



type GetCandidateCandidateIDCommitteesFilingFrequencyEnum string

const (
    GetCandidateCandidateIDCommitteesFilingFrequencyEnumUnknown GetCandidateCandidateIDCommitteesFilingFrequencyEnum = ""
GetCandidateCandidateIDCommitteesFilingFrequencyEnumA GetCandidateCandidateIDCommitteesFilingFrequencyEnum = "A"
GetCandidateCandidateIDCommitteesFilingFrequencyEnumM GetCandidateCandidateIDCommitteesFilingFrequencyEnum = "M"
GetCandidateCandidateIDCommitteesFilingFrequencyEnumN GetCandidateCandidateIDCommitteesFilingFrequencyEnum = "N"
GetCandidateCandidateIDCommitteesFilingFrequencyEnumQ GetCandidateCandidateIDCommitteesFilingFrequencyEnum = "Q"
GetCandidateCandidateIDCommitteesFilingFrequencyEnumT GetCandidateCandidateIDCommitteesFilingFrequencyEnum = "T"
GetCandidateCandidateIDCommitteesFilingFrequencyEnumW GetCandidateCandidateIDCommitteesFilingFrequencyEnum = "W"
GetCandidateCandidateIDCommitteesFilingFrequencyEnumMinusA GetCandidateCandidateIDCommitteesFilingFrequencyEnum = "-A"
GetCandidateCandidateIDCommitteesFilingFrequencyEnumMinusT GetCandidateCandidateIDCommitteesFilingFrequencyEnum = "-T"
)



type GetCandidateCandidateIDCommitteesOrganizationTypeEnum string

const (
    GetCandidateCandidateIDCommitteesOrganizationTypeEnumUnknown GetCandidateCandidateIDCommitteesOrganizationTypeEnum = ""
GetCandidateCandidateIDCommitteesOrganizationTypeEnumC GetCandidateCandidateIDCommitteesOrganizationTypeEnum = "C"
GetCandidateCandidateIDCommitteesOrganizationTypeEnumL GetCandidateCandidateIDCommitteesOrganizationTypeEnum = "L"
GetCandidateCandidateIDCommitteesOrganizationTypeEnumM GetCandidateCandidateIDCommitteesOrganizationTypeEnum = "M"
GetCandidateCandidateIDCommitteesOrganizationTypeEnumT GetCandidateCandidateIDCommitteesOrganizationTypeEnum = "T"
GetCandidateCandidateIDCommitteesOrganizationTypeEnumV GetCandidateCandidateIDCommitteesOrganizationTypeEnum = "V"
GetCandidateCandidateIDCommitteesOrganizationTypeEnumW GetCandidateCandidateIDCommitteesOrganizationTypeEnum = "W"
)


type GetCandidateCandidateIDCommitteesQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    CommitteeType []GetCandidateCandidateIDCommitteesCommitteeTypeEnum `queryParam:"style=form,explode=true,name=committee_type"`
    Cycle []int32 `queryParam:"style=form,explode=true,name=cycle"`
    Designation []GetCandidateCandidateIDCommitteesDesignationEnum `queryParam:"style=form,explode=true,name=designation"`
    FilingFrequency []GetCandidateCandidateIDCommitteesFilingFrequencyEnum `queryParam:"style=form,explode=true,name=filing_frequency"`
    OrganizationType []GetCandidateCandidateIDCommitteesOrganizationTypeEnum `queryParam:"style=form,explode=true,name=organization_type"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    Year []int32 `queryParam:"style=form,explode=true,name=year"`
    
}

type GetCandidateCandidateIDCommitteesRequest struct {
    PathParams GetCandidateCandidateIDCommitteesPathParams 
    QueryParams GetCandidateCandidateIDCommitteesQueryParams 
    
}

type GetCandidateCandidateIDCommitteesResponse struct {
    CommitteeDetailPage *shared.CommitteeDetailPage 
    ContentType string 
    StatusCode int64 
    
}

