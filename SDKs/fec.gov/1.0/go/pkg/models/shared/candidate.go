package shared

import (
	"time"
)

type CandidatePrincipalCommittees struct {
	AffiliatedCommitteeName *string    `json:"affiliated_committee_name"`
	CandidateIds            []string   `json:"candidate_ids"`
	CommitteeID             string     `json:"committee_id"`
	CommitteeType           *string    `json:"committee_type"`
	CommitteeTypeFull       *string    `json:"committee_type_full"`
	Cycles                  []int32    `json:"cycles"`
	Designation             *string    `json:"designation"`
	DesignationFull         *string    `json:"designation_full"`
	FilingFrequency         *string    `json:"filing_frequency"`
	FirstFileDate           *time.Time `json:"first_file_date"`
	LastF1Date              *time.Time `json:"last_f1_date"`
	LastFileDate            *time.Time `json:"last_file_date"`
	Name                    *string    `json:"name"`
	OrganizationType        *string    `json:"organization_type"`
	OrganizationTypeFull    *string    `json:"organization_type_full"`
	Party                   *string    `json:"party"`
	PartyFull               *string    `json:"party_full"`
	State                   *string    `json:"state"`
	TreasurerName           *string    `json:"treasurer_name"`
}

type Candidate struct {
	ActiveThrough          *int32                         `json:"active_through"`
	CandidateID            *string                        `json:"candidate_id"`
	CandidateInactive      *bool                          `json:"candidate_inactive"`
	CandidateStatus        *string                        `json:"candidate_status"`
	Cycles                 []int32                        `json:"cycles"`
	District               *string                        `json:"district"`
	DistrictNumber         *int32                         `json:"district_number"`
	ElectionDistricts      []string                       `json:"election_districts"`
	ElectionYears          []int32                        `json:"election_years"`
	FederalFundsFlag       *bool                          `json:"federal_funds_flag"`
	FirstFileDate          *time.Time                     `json:"first_file_date"`
	HasRaisedFunds         *bool                          `json:"has_raised_funds"`
	InactiveElectionYears  []int32                        `json:"inactive_election_years"`
	IncumbentChallenge     *string                        `json:"incumbent_challenge"`
	IncumbentChallengeFull *string                        `json:"incumbent_challenge_full"`
	LastF2Date             *time.Time                     `json:"last_f2_date"`
	LastFileDate           *time.Time                     `json:"last_file_date"`
	LoadDate               *time.Time                     `json:"load_date"`
	Name                   *string                        `json:"name"`
	Office                 *string                        `json:"office"`
	OfficeFull             *string                        `json:"office_full"`
	Party                  *string                        `json:"party"`
	PartyFull              *string                        `json:"party_full"`
	PrincipalCommittees    []CandidatePrincipalCommittees `json:"principal_committees"`
	State                  *string                        `json:"state"`
}
