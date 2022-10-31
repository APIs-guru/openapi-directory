package operations

import (
"openapi/pkg/models/shared")


type GetElectioneeringByCandidateOfficeEnum string

const (
    GetElectioneeringByCandidateOfficeEnumHouse GetElectioneeringByCandidateOfficeEnum = "house"
GetElectioneeringByCandidateOfficeEnumSenate GetElectioneeringByCandidateOfficeEnum = "senate"
GetElectioneeringByCandidateOfficeEnumPresident GetElectioneeringByCandidateOfficeEnum = "president"
)


type GetElectioneeringByCandidateQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    CandidateID []string `queryParam:"style=form,explode=true,name=candidate_id"`
    Cycle []int32 `queryParam:"style=form,explode=true,name=cycle"`
    District *string `queryParam:"style=form,explode=true,name=district"`
    ElectionFull *bool `queryParam:"style=form,explode=true,name=election_full"`
    Office *GetElectioneeringByCandidateOfficeEnum `queryParam:"style=form,explode=true,name=office"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    State *string `queryParam:"style=form,explode=true,name=state"`
    
}

type GetElectioneeringByCandidateRequest struct {
    QueryParams GetElectioneeringByCandidateQueryParams 
    
}

type GetElectioneeringByCandidateResponse struct {
    ContentType string 
    ElectioneeringByCandidatePage *shared.ElectioneeringByCandidatePage 
    StatusCode int64 
    
}

