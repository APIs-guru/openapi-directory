package operations

import (
	"openapi/pkg/models/shared"
)

type GetAuditCaseQueryParams struct {
	APIKey               string   `queryParam:"style=form,explode=true,name=api_key"`
	AuditCaseID          []string `queryParam:"style=form,explode=true,name=audit_case_id"`
	AuditID              []int32  `queryParam:"style=form,explode=true,name=audit_id"`
	CandidateID          []string `queryParam:"style=form,explode=true,name=candidate_id"`
	CommitteeDesignation *string  `queryParam:"style=form,explode=true,name=committee_designation"`
	CommitteeID          []string `queryParam:"style=form,explode=true,name=committee_id"`
	CommitteeType        []string `queryParam:"style=form,explode=true,name=committee_type"`
	Cycle                []int32  `queryParam:"style=form,explode=true,name=cycle"`
	MaxElectionCycle     *int32   `queryParam:"style=form,explode=true,name=max_election_cycle"`
	MinElectionCycle     *int32   `queryParam:"style=form,explode=true,name=min_election_cycle"`
	Page                 *int32   `queryParam:"style=form,explode=true,name=page"`
	PerPage              *int32   `queryParam:"style=form,explode=true,name=per_page"`
	PrimaryCategoryID    *string  `queryParam:"style=form,explode=true,name=primary_category_id"`
	Q                    []string `queryParam:"style=form,explode=true,name=q"`
	Qq                   []string `queryParam:"style=form,explode=true,name=qq"`
	Sort                 []string `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull         *bool    `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly         *bool    `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast        *bool    `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	SubCategoryID        *string  `queryParam:"style=form,explode=true,name=sub_category_id"`
}

type GetAuditCaseRequest struct {
	QueryParams GetAuditCaseQueryParams
}

type GetAuditCaseResponse struct {
	AuditCasePage *shared.AuditCasePage
	ContentType   string
	StatusCode    int64
}
