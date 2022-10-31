package operations

import (
"openapi/pkg/models/shared")

type GetCommitteeCommitteeIDCandidatesHistoryPathParams struct {
    CommitteeID string `pathParam:"style=simple,explode=false,name=committee_id"`
    
}

type GetCommitteeCommitteeIDCandidatesHistoryQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    ElectionFull *bool `queryParam:"style=form,explode=true,name=election_full"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    
}

type GetCommitteeCommitteeIDCandidatesHistoryRequest struct {
    PathParams GetCommitteeCommitteeIDCandidatesHistoryPathParams 
    QueryParams GetCommitteeCommitteeIDCandidatesHistoryQueryParams 
    
}

type GetCommitteeCommitteeIDCandidatesHistoryResponse struct {
    CandidateHistoryPage *shared.CandidateHistoryPage 
    ContentType string 
    StatusCode int64 
    
}

