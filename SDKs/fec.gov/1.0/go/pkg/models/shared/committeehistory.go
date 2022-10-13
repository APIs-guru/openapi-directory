package shared

type CommitteeHistory struct {
	AffiliatedCommitteeName     *string  `json:"affiliated_committee_name"`
	CandidateIds                []string `json:"candidate_ids"`
	City                        *string  `json:"city"`
	CommitteeID                 string   `json:"committee_id"`
	CommitteeType               *string  `json:"committee_type"`
	CommitteeTypeFull           *string  `json:"committee_type_full"`
	ConvertToPacFlag            *bool    `json:"convert_to_pac_flag"`
	Cycle                       int32    `json:"cycle"`
	Cycles                      []int32  `json:"cycles"`
	CyclesHasActivity           []int32  `json:"cycles_has_activity"`
	CyclesHasFinancial          []int32  `json:"cycles_has_financial"`
	Designation                 *string  `json:"designation"`
	DesignationFull             *string  `json:"designation_full"`
	FilingFrequency             *string  `json:"filing_frequency"`
	FormerCandidateElectionYear *int32   `json:"former_candidate_election_year"`
	FormerCandidateID           *string  `json:"former_candidate_id"`
	FormerCandidateName         *string  `json:"former_candidate_name"`
	FormerCommitteeName         *string  `json:"former_committee_name"`
	IsActive                    *bool    `json:"is_active"`
	LastCycleHasActivity        *int32   `json:"last_cycle_has_activity"`
	LastCycleHasFinancial       *int32   `json:"last_cycle_has_financial"`
	Name                        *string  `json:"name"`
	OrganizationType            *string  `json:"organization_type"`
	OrganizationTypeFull        *string  `json:"organization_type_full"`
	Party                       *string  `json:"party"`
	PartyFull                   *string  `json:"party_full"`
	SponsorCandidateIds         []string `json:"sponsor_candidate_ids"`
	State                       *string  `json:"state"`
	StateFull                   *string  `json:"state_full"`
	Street1                     *string  `json:"street_1"`
	Street2                     *string  `json:"street_2"`
	TreasurerName               *string  `json:"treasurer_name"`
	Zip                         *string  `json:"zip"`
}
