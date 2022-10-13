package shared

import (
	"time"
)

type AuditCase struct {
	AuditCaseID          *string                     `json:"audit_case_id"`
	AuditID              *int32                      `json:"audit_id"`
	CandidateID          *string                     `json:"candidate_id"`
	CandidateName        *string                     `json:"candidate_name"`
	CommitteeDescription *string                     `json:"committee_description"`
	CommitteeDesignation *string                     `json:"committee_designation"`
	CommitteeID          *string                     `json:"committee_id"`
	CommitteeName        *string                     `json:"committee_name"`
	CommitteeType        *string                     `json:"committee_type"`
	Cycle                *int32                      `json:"cycle"`
	FarReleaseDate       *time.Time                  `json:"far_release_date"`
	LinkToReport         *string                     `json:"link_to_report"`
	PrimaryCategoryList  []AuditCaseCategoryRelation `json:"primary_category_list"`
}
