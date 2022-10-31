package operations

import (
"openapi/pkg/models/shared")

type GetCommitteeCommitteeIDCandidatesPathParams struct {
    CommitteeID string `pathParam:"style=simple,explode=false,name=committee_id"`
    
}


type GetCommitteeCommitteeIDCandidatesCandidateStatusEnum string

const (
    GetCommitteeCommitteeIDCandidatesCandidateStatusEnumUnknown GetCommitteeCommitteeIDCandidatesCandidateStatusEnum = ""
GetCommitteeCommitteeIDCandidatesCandidateStatusEnumC GetCommitteeCommitteeIDCandidatesCandidateStatusEnum = "C"
GetCommitteeCommitteeIDCandidatesCandidateStatusEnumF GetCommitteeCommitteeIDCandidatesCandidateStatusEnum = "F"
GetCommitteeCommitteeIDCandidatesCandidateStatusEnumN GetCommitteeCommitteeIDCandidatesCandidateStatusEnum = "N"
GetCommitteeCommitteeIDCandidatesCandidateStatusEnumP GetCommitteeCommitteeIDCandidatesCandidateStatusEnum = "P"
)



type GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnum string

const (
    GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnumUnknown GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnum = ""
GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnumI GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnum = "I"
GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnumC GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnum = "C"
GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnumO GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnum = "O"
)



type GetCommitteeCommitteeIDCandidatesOfficeEnum string

const (
    GetCommitteeCommitteeIDCandidatesOfficeEnumUnknown GetCommitteeCommitteeIDCandidatesOfficeEnum = ""
GetCommitteeCommitteeIDCandidatesOfficeEnumH GetCommitteeCommitteeIDCandidatesOfficeEnum = "H"
GetCommitteeCommitteeIDCandidatesOfficeEnumS GetCommitteeCommitteeIDCandidatesOfficeEnum = "S"
GetCommitteeCommitteeIDCandidatesOfficeEnumP GetCommitteeCommitteeIDCandidatesOfficeEnum = "P"
)


type GetCommitteeCommitteeIDCandidatesQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    CandidateStatus []GetCommitteeCommitteeIDCandidatesCandidateStatusEnum `queryParam:"style=form,explode=true,name=candidate_status"`
    Cycle []int32 `queryParam:"style=form,explode=true,name=cycle"`
    District []string `queryParam:"style=form,explode=true,name=district"`
    ElectionYear []int32 `queryParam:"style=form,explode=true,name=election_year"`
    FederalFundsFlag *bool `queryParam:"style=form,explode=true,name=federal_funds_flag"`
    HasRaisedFunds *bool `queryParam:"style=form,explode=true,name=has_raised_funds"`
    IncumbentChallenge []GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnum `queryParam:"style=form,explode=true,name=incumbent_challenge"`
    Name []string `queryParam:"style=form,explode=true,name=name"`
    Office []GetCommitteeCommitteeIDCandidatesOfficeEnum `queryParam:"style=form,explode=true,name=office"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    Party []string `queryParam:"style=form,explode=true,name=party"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    State []string `queryParam:"style=form,explode=true,name=state"`
    Year *string `queryParam:"style=form,explode=true,name=year"`
    
}

type GetCommitteeCommitteeIDCandidatesRequest struct {
    PathParams GetCommitteeCommitteeIDCandidatesPathParams 
    QueryParams GetCommitteeCommitteeIDCandidatesQueryParams 
    
}

type GetCommitteeCommitteeIDCandidatesResponse struct {
    CandidateDetailPage *shared.CandidateDetailPage 
    ContentType string 
    StatusCode int64 
    
}

