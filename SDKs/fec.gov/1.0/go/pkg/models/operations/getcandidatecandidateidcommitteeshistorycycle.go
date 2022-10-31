package operations

import (
"openapi/pkg/models/shared")

type GetCandidateCandidateIDCommitteesHistoryCyclePathParams struct {
    CandidateID string `pathParam:"style=simple,explode=false,name=candidate_id"`
    Cycle int32 `pathParam:"style=simple,explode=false,name=cycle"`
    
}


type GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnum string

const (
    GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnumUnknown GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnum = ""
GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnumA GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnum = "A"
GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnumJ GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnum = "J"
GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnumP GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnum = "P"
GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnumU GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnum = "U"
GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnumB GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnum = "B"
GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnumD GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnum = "D"
)


type GetCandidateCandidateIDCommitteesHistoryCycleQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    Designation []GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnum `queryParam:"style=form,explode=true,name=designation"`
    ElectionFull *bool `queryParam:"style=form,explode=true,name=election_full"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    
}

type GetCandidateCandidateIDCommitteesHistoryCycleRequest struct {
    PathParams GetCandidateCandidateIDCommitteesHistoryCyclePathParams 
    QueryParams GetCandidateCandidateIDCommitteesHistoryCycleQueryParams 
    
}

type GetCandidateCandidateIDCommitteesHistoryCycleResponse struct {
    CommitteeHistoryPage *shared.CommitteeHistoryPage 
    ContentType string 
    StatusCode int64 
    
}

