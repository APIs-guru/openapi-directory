package operations

import (
	"openapi/pkg/models/shared"
)

type GetCandidateCandidateIDCommitteesHistoryPathParams struct {
	CandidateID string `pathParam:"style=simple,explode=false,name=candidate_id"`
}

type GetCandidateCandidateIDCommitteesHistoryDesignationEnum string

const (
	GetCandidateCandidateIDCommitteesHistoryDesignationEnumUnknown GetCandidateCandidateIDCommitteesHistoryDesignationEnum = ""
	GetCandidateCandidateIDCommitteesHistoryDesignationEnumA       GetCandidateCandidateIDCommitteesHistoryDesignationEnum = "A"
	GetCandidateCandidateIDCommitteesHistoryDesignationEnumJ       GetCandidateCandidateIDCommitteesHistoryDesignationEnum = "J"
	GetCandidateCandidateIDCommitteesHistoryDesignationEnumP       GetCandidateCandidateIDCommitteesHistoryDesignationEnum = "P"
	GetCandidateCandidateIDCommitteesHistoryDesignationEnumU       GetCandidateCandidateIDCommitteesHistoryDesignationEnum = "U"
	GetCandidateCandidateIDCommitteesHistoryDesignationEnumB       GetCandidateCandidateIDCommitteesHistoryDesignationEnum = "B"
	GetCandidateCandidateIDCommitteesHistoryDesignationEnumD       GetCandidateCandidateIDCommitteesHistoryDesignationEnum = "D"
)

type GetCandidateCandidateIDCommitteesHistoryQueryParams struct {
	APIKey        string                                                    `queryParam:"style=form,explode=true,name=api_key"`
	Designation   []GetCandidateCandidateIDCommitteesHistoryDesignationEnum `queryParam:"style=form,explode=true,name=designation"`
	ElectionFull  *bool                                                     `queryParam:"style=form,explode=true,name=election_full"`
	Page          *int32                                                    `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32                                                    `queryParam:"style=form,explode=true,name=per_page"`
	Sort          *string                                                   `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool                                                     `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool                                                     `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool                                                     `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetCandidateCandidateIDCommitteesHistoryRequest struct {
	PathParams  GetCandidateCandidateIDCommitteesHistoryPathParams
	QueryParams GetCandidateCandidateIDCommitteesHistoryQueryParams
}

type GetCandidateCandidateIDCommitteesHistoryResponse struct {
	CommitteeHistoryPage *shared.CommitteeHistoryPage
	ContentType          string
	StatusCode           int64
}
