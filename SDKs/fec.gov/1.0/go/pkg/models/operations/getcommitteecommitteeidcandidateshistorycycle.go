package operations

import (
"openapi/pkg/models/shared")

type GetCommitteeCommitteeIDCandidatesHistoryCyclePathParams struct {
    CommitteeID string `pathParam:"style=simple,explode=false,name=committee_id"`
    Cycle int32 `pathParam:"style=simple,explode=false,name=cycle"`
    
}

type GetCommitteeCommitteeIDCandidatesHistoryCycleQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    ElectionFull *bool `queryParam:"style=form,explode=true,name=election_full"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    
}

type GetCommitteeCommitteeIDCandidatesHistoryCycleRequest struct {
    PathParams GetCommitteeCommitteeIDCandidatesHistoryCyclePathParams 
    QueryParams GetCommitteeCommitteeIDCandidatesHistoryCycleQueryParams 
    
}

type GetCommitteeCommitteeIDCandidatesHistoryCycleResponse struct {
    CandidateHistoryPage *shared.CandidateHistoryPage 
    ContentType string 
    StatusCode int64 
    
}

