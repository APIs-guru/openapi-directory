package shared

import (
"time")

type CommitteeSponsorCandidateList struct {
    SponsorCandidateID *string `json:"sponsor_candidate_id,omitempty"`
    SponsorCandidateName *string `json:"sponsor_candidate_name,omitempty"`
    
}

type Committee struct {
    AffiliatedCommitteeName *string `json:"affiliated_committee_name,omitempty"`
    CandidateIds []string `json:"candidate_ids,omitempty"`
    CommitteeID string `json:"committee_id"`
    CommitteeType *string `json:"committee_type,omitempty"`
    CommitteeTypeFull *string `json:"committee_type_full,omitempty"`
    Cycles []int32 `json:"cycles,omitempty"`
    Designation *string `json:"designation,omitempty"`
    DesignationFull *string `json:"designation_full,omitempty"`
    FilingFrequency *string `json:"filing_frequency,omitempty"`
    FirstFileDate *time.Time `json:"first_file_date,omitempty"`
    LastF1Date *time.Time `json:"last_f1_date,omitempty"`
    LastFileDate *time.Time `json:"last_file_date,omitempty"`
    Name *string `json:"name,omitempty"`
    OrganizationType *string `json:"organization_type,omitempty"`
    OrganizationTypeFull *string `json:"organization_type_full,omitempty"`
    Party *string `json:"party,omitempty"`
    PartyFull *string `json:"party_full,omitempty"`
    SponsorCandidateIds []string `json:"sponsor_candidate_ids,omitempty"`
    SponsorCandidateList []CommitteeSponsorCandidateList `json:"sponsor_candidate_list,omitempty"`
    State *string `json:"state,omitempty"`
    TreasurerName *string `json:"treasurer_name,omitempty"`
    
}

