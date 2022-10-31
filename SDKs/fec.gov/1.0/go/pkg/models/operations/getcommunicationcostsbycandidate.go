package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommunicationCostsByCandidateOfficeEnum string

const (
	GetCommunicationCostsByCandidateOfficeEnumHouse     GetCommunicationCostsByCandidateOfficeEnum = "house"
	GetCommunicationCostsByCandidateOfficeEnumSenate    GetCommunicationCostsByCandidateOfficeEnum = "senate"
	GetCommunicationCostsByCandidateOfficeEnumPresident GetCommunicationCostsByCandidateOfficeEnum = "president"
)

type GetCommunicationCostsByCandidateSupportOpposeEnum string

const (
	GetCommunicationCostsByCandidateSupportOpposeEnumS GetCommunicationCostsByCandidateSupportOpposeEnum = "S"
	GetCommunicationCostsByCandidateSupportOpposeEnumO GetCommunicationCostsByCandidateSupportOpposeEnum = "O"
)

type GetCommunicationCostsByCandidateQueryParams struct {
	APIKey        string                                             `queryParam:"style=form,explode=true,name=api_key"`
	CandidateID   []string                                           `queryParam:"style=form,explode=true,name=candidate_id"`
	Cycle         []int32                                            `queryParam:"style=form,explode=true,name=cycle"`
	District      *string                                            `queryParam:"style=form,explode=true,name=district"`
	ElectionFull  *bool                                              `queryParam:"style=form,explode=true,name=election_full"`
	Office        *GetCommunicationCostsByCandidateOfficeEnum        `queryParam:"style=form,explode=true,name=office"`
	Page          *int32                                             `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32                                             `queryParam:"style=form,explode=true,name=per_page"`
	Sort          *string                                            `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool                                              `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool                                              `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool                                              `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	State         *string                                            `queryParam:"style=form,explode=true,name=state"`
	SupportOppose *GetCommunicationCostsByCandidateSupportOpposeEnum `queryParam:"style=form,explode=true,name=support_oppose"`
}

type GetCommunicationCostsByCandidateRequest struct {
	QueryParams GetCommunicationCostsByCandidateQueryParams
}

type GetCommunicationCostsByCandidateResponse struct {
	CommunicationCostByCandidatePage *shared.CommunicationCostByCandidatePage
	ContentType                      string
	StatusCode                       int64
}
