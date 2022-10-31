package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCandidatesCandidateStatusEnum string

const (
	GetCandidatesCandidateStatusEnumUnknown GetCandidatesCandidateStatusEnum = ""
	GetCandidatesCandidateStatusEnumC       GetCandidatesCandidateStatusEnum = "C"
	GetCandidatesCandidateStatusEnumF       GetCandidatesCandidateStatusEnum = "F"
	GetCandidatesCandidateStatusEnumN       GetCandidatesCandidateStatusEnum = "N"
	GetCandidatesCandidateStatusEnumP       GetCandidatesCandidateStatusEnum = "P"
)

type GetCandidatesIncumbentChallengeEnum string

const (
	GetCandidatesIncumbentChallengeEnumUnknown GetCandidatesIncumbentChallengeEnum = ""
	GetCandidatesIncumbentChallengeEnumI       GetCandidatesIncumbentChallengeEnum = "I"
	GetCandidatesIncumbentChallengeEnumC       GetCandidatesIncumbentChallengeEnum = "C"
	GetCandidatesIncumbentChallengeEnumO       GetCandidatesIncumbentChallengeEnum = "O"
)

type GetCandidatesOfficeEnum string

const (
	GetCandidatesOfficeEnumUnknown GetCandidatesOfficeEnum = ""
	GetCandidatesOfficeEnumH       GetCandidatesOfficeEnum = "H"
	GetCandidatesOfficeEnumS       GetCandidatesOfficeEnum = "S"
	GetCandidatesOfficeEnumP       GetCandidatesOfficeEnum = "P"
)

type GetCandidatesQueryParams struct {
	APIKey             string                                `queryParam:"style=form,explode=true,name=api_key"`
	CandidateID        []string                              `queryParam:"style=form,explode=true,name=candidate_id"`
	CandidateStatus    []GetCandidatesCandidateStatusEnum    `queryParam:"style=form,explode=true,name=candidate_status"`
	Cycle              []int32                               `queryParam:"style=form,explode=true,name=cycle"`
	District           []string                              `queryParam:"style=form,explode=true,name=district"`
	ElectionYear       []int32                               `queryParam:"style=form,explode=true,name=election_year"`
	FederalFundsFlag   *bool                                 `queryParam:"style=form,explode=true,name=federal_funds_flag"`
	HasRaisedFunds     *bool                                 `queryParam:"style=form,explode=true,name=has_raised_funds"`
	IncumbentChallenge []GetCandidatesIncumbentChallengeEnum `queryParam:"style=form,explode=true,name=incumbent_challenge"`
	IsActiveCandidate  *bool                                 `queryParam:"style=form,explode=true,name=is_active_candidate"`
	MaxFirstFileDate   *time.Time                            `queryParam:"style=form,explode=true,name=max_first_file_date"`
	MinFirstFileDate   *time.Time                            `queryParam:"style=form,explode=true,name=min_first_file_date"`
	Name               []string                              `queryParam:"style=form,explode=true,name=name"`
	Office             []GetCandidatesOfficeEnum             `queryParam:"style=form,explode=true,name=office"`
	Page               *int32                                `queryParam:"style=form,explode=true,name=page"`
	Party              []string                              `queryParam:"style=form,explode=true,name=party"`
	PerPage            *int32                                `queryParam:"style=form,explode=true,name=per_page"`
	Q                  []string                              `queryParam:"style=form,explode=true,name=q"`
	Sort               *string                               `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull       *bool                                 `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly       *bool                                 `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast      *bool                                 `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	State              []string                              `queryParam:"style=form,explode=true,name=state"`
	Year               *string                               `queryParam:"style=form,explode=true,name=year"`
}

type GetCandidatesRequest struct {
	QueryParams GetCandidatesQueryParams
}

type GetCandidatesResponse struct {
	CandidatePage *shared.CandidatePage
	ContentType   string
	StatusCode    int64
}
