package shared

import (
"time")

type CandidatePrincipalCommittees struct {
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
    State *string `json:"state,omitempty"`
    TreasurerName *string `json:"treasurer_name,omitempty"`
    
}

type Candidate struct {
    ActiveThrough *int32 `json:"active_through,omitempty"`
    CandidateID *string `json:"candidate_id,omitempty"`
    CandidateInactive *bool `json:"candidate_inactive,omitempty"`
    CandidateStatus *string `json:"candidate_status,omitempty"`
    Cycles []int32 `json:"cycles,omitempty"`
    District *string `json:"district,omitempty"`
    DistrictNumber *int32 `json:"district_number,omitempty"`
    ElectionDistricts []string `json:"election_districts,omitempty"`
    ElectionYears []int32 `json:"election_years,omitempty"`
    FederalFundsFlag *bool `json:"federal_funds_flag,omitempty"`
    FirstFileDate *time.Time `json:"first_file_date,omitempty"`
    HasRaisedFunds *bool `json:"has_raised_funds,omitempty"`
    InactiveElectionYears []int32 `json:"inactive_election_years,omitempty"`
    IncumbentChallenge *string `json:"incumbent_challenge,omitempty"`
    IncumbentChallengeFull *string `json:"incumbent_challenge_full,omitempty"`
    LastF2Date *time.Time `json:"last_f2_date,omitempty"`
    LastFileDate *time.Time `json:"last_file_date,omitempty"`
    LoadDate *time.Time `json:"load_date,omitempty"`
    Name *string `json:"name,omitempty"`
    Office *string `json:"office,omitempty"`
    OfficeFull *string `json:"office_full,omitempty"`
    Party *string `json:"party,omitempty"`
    PartyFull *string `json:"party_full,omitempty"`
    PrincipalCommittees []CandidatePrincipalCommittees `json:"principal_committees,omitempty"`
    State *string `json:"state,omitempty"`
    
}

