package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCandidatesSearchCandidateStatusEnum string

const (
	GetCandidatesSearchCandidateStatusEnumUnknown GetCandidatesSearchCandidateStatusEnum = ""
	GetCandidatesSearchCandidateStatusEnumC       GetCandidatesSearchCandidateStatusEnum = "C"
	GetCandidatesSearchCandidateStatusEnumF       GetCandidatesSearchCandidateStatusEnum = "F"
	GetCandidatesSearchCandidateStatusEnumN       GetCandidatesSearchCandidateStatusEnum = "N"
	GetCandidatesSearchCandidateStatusEnumP       GetCandidatesSearchCandidateStatusEnum = "P"
)

type GetCandidatesSearchIncumbentChallengeEnum string

const (
	GetCandidatesSearchIncumbentChallengeEnumUnknown GetCandidatesSearchIncumbentChallengeEnum = ""
	GetCandidatesSearchIncumbentChallengeEnumI       GetCandidatesSearchIncumbentChallengeEnum = "I"
	GetCandidatesSearchIncumbentChallengeEnumC       GetCandidatesSearchIncumbentChallengeEnum = "C"
	GetCandidatesSearchIncumbentChallengeEnumO       GetCandidatesSearchIncumbentChallengeEnum = "O"
)

type GetCandidatesSearchOfficeEnum string

const (
	GetCandidatesSearchOfficeEnumUnknown GetCandidatesSearchOfficeEnum = ""
	GetCandidatesSearchOfficeEnumH       GetCandidatesSearchOfficeEnum = "H"
	GetCandidatesSearchOfficeEnumS       GetCandidatesSearchOfficeEnum = "S"
	GetCandidatesSearchOfficeEnumP       GetCandidatesSearchOfficeEnum = "P"
)

type GetCandidatesSearchQueryParams struct {
	APIKey             string                                      `queryParam:"style=form,explode=true,name=api_key"`
	CandidateID        []string                                    `queryParam:"style=form,explode=true,name=candidate_id"`
	CandidateStatus    []GetCandidatesSearchCandidateStatusEnum    `queryParam:"style=form,explode=true,name=candidate_status"`
	Cycle              []int32                                     `queryParam:"style=form,explode=true,name=cycle"`
	District           []string                                    `queryParam:"style=form,explode=true,name=district"`
	ElectionYear       []int32                                     `queryParam:"style=form,explode=true,name=election_year"`
	FederalFundsFlag   *bool                                       `queryParam:"style=form,explode=true,name=federal_funds_flag"`
	HasRaisedFunds     *bool                                       `queryParam:"style=form,explode=true,name=has_raised_funds"`
	IncumbentChallenge []GetCandidatesSearchIncumbentChallengeEnum `queryParam:"style=form,explode=true,name=incumbent_challenge"`
	IsActiveCandidate  *bool                                       `queryParam:"style=form,explode=true,name=is_active_candidate"`
	MaxFirstFileDate   *time.Time                                  `queryParam:"style=form,explode=true,name=max_first_file_date"`
	MinFirstFileDate   *time.Time                                  `queryParam:"style=form,explode=true,name=min_first_file_date"`
	Name               []string                                    `queryParam:"style=form,explode=true,name=name"`
	Office             []GetCandidatesSearchOfficeEnum             `queryParam:"style=form,explode=true,name=office"`
	Page               *int32                                      `queryParam:"style=form,explode=true,name=page"`
	Party              []string                                    `queryParam:"style=form,explode=true,name=party"`
	PerPage            *int32                                      `queryParam:"style=form,explode=true,name=per_page"`
	Q                  []string                                    `queryParam:"style=form,explode=true,name=q"`
	Sort               *string                                     `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull       *bool                                       `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly       *bool                                       `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast      *bool                                       `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	State              []string                                    `queryParam:"style=form,explode=true,name=state"`
	Year               *string                                     `queryParam:"style=form,explode=true,name=year"`
}

type GetCandidatesSearchRequest struct {
	QueryParams GetCandidatesSearchQueryParams
}

type GetCandidatesSearchResponse struct {
	CandidatePage *shared.CandidatePage
	ContentType   string
	StatusCode    int64
}
