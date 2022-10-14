package shared

type CommitteeHistory struct {
	AffiliatedCommitteeName     *string  `json:"affiliated_committee_name,omitempty"`
	CandidateIds                []string `json:"candidate_ids,omitempty"`
	City                        *string  `json:"city,omitempty"`
	CommitteeID                 string   `json:"committee_id"`
	CommitteeType               *string  `json:"committee_type,omitempty"`
	CommitteeTypeFull           *string  `json:"committee_type_full,omitempty"`
	ConvertToPacFlag            *bool    `json:"convert_to_pac_flag,omitempty"`
	Cycle                       int32    `json:"cycle"`
	Cycles                      []int32  `json:"cycles,omitempty"`
	CyclesHasActivity           []int32  `json:"cycles_has_activity,omitempty"`
	CyclesHasFinancial          []int32  `json:"cycles_has_financial,omitempty"`
	Designation                 *string  `json:"designation,omitempty"`
	DesignationFull             *string  `json:"designation_full,omitempty"`
	FilingFrequency             *string  `json:"filing_frequency,omitempty"`
	FormerCandidateElectionYear *int32   `json:"former_candidate_election_year,omitempty"`
	FormerCandidateID           *string  `json:"former_candidate_id,omitempty"`
	FormerCandidateName         *string  `json:"former_candidate_name,omitempty"`
	FormerCommitteeName         *string  `json:"former_committee_name,omitempty"`
	IsActive                    *bool    `json:"is_active,omitempty"`
	LastCycleHasActivity        *int32   `json:"last_cycle_has_activity,omitempty"`
	LastCycleHasFinancial       *int32   `json:"last_cycle_has_financial,omitempty"`
	Name                        *string  `json:"name,omitempty"`
	OrganizationType            *string  `json:"organization_type,omitempty"`
	OrganizationTypeFull        *string  `json:"organization_type_full,omitempty"`
	Party                       *string  `json:"party,omitempty"`
	PartyFull                   *string  `json:"party_full,omitempty"`
	SponsorCandidateIds         []string `json:"sponsor_candidate_ids,omitempty"`
	State                       *string  `json:"state,omitempty"`
	StateFull                   *string  `json:"state_full,omitempty"`
	Street1                     *string  `json:"street_1,omitempty"`
	Street2                     *string  `json:"street_2,omitempty"`
	TreasurerName               *string  `json:"treasurer_name,omitempty"`
	Zip                         *string  `json:"zip,omitempty"`
}
