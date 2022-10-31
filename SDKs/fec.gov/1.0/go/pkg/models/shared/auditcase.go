package shared

import (
	"time"
)

type AuditCase struct {
	AuditCaseID          *string                     `json:"audit_case_id,omitempty"`
	AuditID              *int32                      `json:"audit_id,omitempty"`
	CandidateID          *string                     `json:"candidate_id,omitempty"`
	CandidateName        *string                     `json:"candidate_name,omitempty"`
	CommitteeDescription *string                     `json:"committee_description,omitempty"`
	CommitteeDesignation *string                     `json:"committee_designation,omitempty"`
	CommitteeID          *string                     `json:"committee_id,omitempty"`
	CommitteeName        *string                     `json:"committee_name,omitempty"`
	CommitteeType        *string                     `json:"committee_type,omitempty"`
	Cycle                *int32                      `json:"cycle,omitempty"`
	FarReleaseDate       *time.Time                  `json:"far_release_date,omitempty"`
	LinkToReport         *string                     `json:"link_to_report,omitempty"`
	PrimaryCategoryList  []AuditCaseCategoryRelation `json:"primary_category_list,omitempty"`
}
