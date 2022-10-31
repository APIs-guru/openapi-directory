package operations

import (
	"openapi/pkg/models/shared"
)

type GetCandidateCandidateIDPathParams struct {
	CandidateID string `pathParam:"style=simple,explode=false,name=candidate_id"`
}

type GetCandidateCandidateIDCandidateStatusEnum string

const (
	GetCandidateCandidateIDCandidateStatusEnumUnknown GetCandidateCandidateIDCandidateStatusEnum = ""
	GetCandidateCandidateIDCandidateStatusEnumC       GetCandidateCandidateIDCandidateStatusEnum = "C"
	GetCandidateCandidateIDCandidateStatusEnumF       GetCandidateCandidateIDCandidateStatusEnum = "F"
	GetCandidateCandidateIDCandidateStatusEnumN       GetCandidateCandidateIDCandidateStatusEnum = "N"
	GetCandidateCandidateIDCandidateStatusEnumP       GetCandidateCandidateIDCandidateStatusEnum = "P"
)

type GetCandidateCandidateIDIncumbentChallengeEnum string

const (
	GetCandidateCandidateIDIncumbentChallengeEnumUnknown GetCandidateCandidateIDIncumbentChallengeEnum = ""
	GetCandidateCandidateIDIncumbentChallengeEnumI       GetCandidateCandidateIDIncumbentChallengeEnum = "I"
	GetCandidateCandidateIDIncumbentChallengeEnumC       GetCandidateCandidateIDIncumbentChallengeEnum = "C"
	GetCandidateCandidateIDIncumbentChallengeEnumO       GetCandidateCandidateIDIncumbentChallengeEnum = "O"
)

type GetCandidateCandidateIDOfficeEnum string

const (
	GetCandidateCandidateIDOfficeEnumUnknown GetCandidateCandidateIDOfficeEnum = ""
	GetCandidateCandidateIDOfficeEnumH       GetCandidateCandidateIDOfficeEnum = "H"
	GetCandidateCandidateIDOfficeEnumS       GetCandidateCandidateIDOfficeEnum = "S"
	GetCandidateCandidateIDOfficeEnumP       GetCandidateCandidateIDOfficeEnum = "P"
)

type GetCandidateCandidateIDQueryParams struct {
	APIKey             string                                          `queryParam:"style=form,explode=true,name=api_key"`
	CandidateStatus    []GetCandidateCandidateIDCandidateStatusEnum    `queryParam:"style=form,explode=true,name=candidate_status"`
	Cycle              []int32                                         `queryParam:"style=form,explode=true,name=cycle"`
	District           []string                                        `queryParam:"style=form,explode=true,name=district"`
	ElectionYear       []int32                                         `queryParam:"style=form,explode=true,name=election_year"`
	FederalFundsFlag   *bool                                           `queryParam:"style=form,explode=true,name=federal_funds_flag"`
	HasRaisedFunds     *bool                                           `queryParam:"style=form,explode=true,name=has_raised_funds"`
	IncumbentChallenge []GetCandidateCandidateIDIncumbentChallengeEnum `queryParam:"style=form,explode=true,name=incumbent_challenge"`
	Name               []string                                        `queryParam:"style=form,explode=true,name=name"`
	Office             []GetCandidateCandidateIDOfficeEnum             `queryParam:"style=form,explode=true,name=office"`
	Page               *int32                                          `queryParam:"style=form,explode=true,name=page"`
	Party              []string                                        `queryParam:"style=form,explode=true,name=party"`
	PerPage            *int32                                          `queryParam:"style=form,explode=true,name=per_page"`
	Sort               *string                                         `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull       *bool                                           `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly       *bool                                           `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast      *bool                                           `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	State              []string                                        `queryParam:"style=form,explode=true,name=state"`
	Year               *string                                         `queryParam:"style=form,explode=true,name=year"`
}

type GetCandidateCandidateIDRequest struct {
	PathParams  GetCandidateCandidateIDPathParams
	QueryParams GetCandidateCandidateIDQueryParams
}

type GetCandidateCandidateIDResponse struct {
	CandidateDetailPage *shared.CandidateDetailPage
	ContentType         string
	StatusCode          int64
}
