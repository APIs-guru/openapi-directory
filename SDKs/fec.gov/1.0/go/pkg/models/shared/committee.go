package shared

import (
	"time"
)

type CommitteeSponsorCandidateList struct {
	SponsorCandidateID   *string `json:"sponsor_candidate_id"`
	SponsorCandidateName *string `json:"sponsor_candidate_name"`
}

type Committee struct {
	AffiliatedCommitteeName *string                         `json:"affiliated_committee_name"`
	CandidateIds            []string                        `json:"candidate_ids"`
	CommitteeID             string                          `json:"committee_id"`
	CommitteeType           *string                         `json:"committee_type"`
	CommitteeTypeFull       *string                         `json:"committee_type_full"`
	Cycles                  []int32                         `json:"cycles"`
	Designation             *string                         `json:"designation"`
	DesignationFull         *string                         `json:"designation_full"`
	FilingFrequency         *string                         `json:"filing_frequency"`
	FirstFileDate           *time.Time                      `json:"first_file_date"`
	LastF1Date              *time.Time                      `json:"last_f1_date"`
	LastFileDate            *time.Time                      `json:"last_file_date"`
	Name                    *string                         `json:"name"`
	OrganizationType        *string                         `json:"organization_type"`
	OrganizationTypeFull    *string                         `json:"organization_type_full"`
	Party                   *string                         `json:"party"`
	PartyFull               *string                         `json:"party_full"`
	SponsorCandidateIds     []string                        `json:"sponsor_candidate_ids"`
	SponsorCandidateList    []CommitteeSponsorCandidateList `json:"sponsor_candidate_list"`
	State                   *string                         `json:"state"`
	TreasurerName           *string                         `json:"treasurer_name"`
}
