package shared

import (
"time")

type CandidateHistoryTotal struct {
    ActiveThrough *int32 `json:"active_through,omitempty"`
    AddressCity *string `json:"address_city,omitempty"`
    AddressState *string `json:"address_state,omitempty"`
    AddressStreet1 *string `json:"address_street_1,omitempty"`
    AddressStreet2 *string `json:"address_street_2,omitempty"`
    AddressZip *string `json:"address_zip,omitempty"`
    CandidateElectionYear *int32 `json:"candidate_election_year,omitempty"`
    CandidateID string `json:"candidate_id"`
    CandidateInactive *bool `json:"candidate_inactive,omitempty"`
    CandidateStatus *string `json:"candidate_status,omitempty"`
    CashOnHandEndPeriod *float64 `json:"cash_on_hand_end_period,omitempty"`
    CoverageEndDate *time.Time `json:"coverage_end_date,omitempty"`
    CoverageStartDate *time.Time `json:"coverage_start_date,omitempty"`
    Cycle int32 `json:"cycle"`
    Cycles []int32 `json:"cycles,omitempty"`
    DebtsOwedByCommittee *float64 `json:"debts_owed_by_committee,omitempty"`
    Disbursements *float64 `json:"disbursements,omitempty"`
    District *string `json:"district,omitempty"`
    DistrictNumber *int32 `json:"district_number,omitempty"`
    ElectionDistricts []string `json:"election_districts,omitempty"`
    ElectionYear *int32 `json:"election_year,omitempty"`
    ElectionYears []int32 `json:"election_years,omitempty"`
    FecCyclesInElection []int32 `json:"fec_cycles_in_election,omitempty"`
    FederalFundsFlag *bool `json:"federal_funds_flag,omitempty"`
    FirstFileDate *time.Time `json:"first_file_date,omitempty"`
    Flags *string `json:"flags,omitempty"`
    HasRaisedFunds *bool `json:"has_raised_funds,omitempty"`
    IncumbentChallenge *string `json:"incumbent_challenge,omitempty"`
    IncumbentChallengeFull *string `json:"incumbent_challenge_full,omitempty"`
    IsElection bool `json:"is_election"`
    LastF2Date *time.Time `json:"last_f2_date,omitempty"`
    LastFileDate *time.Time `json:"last_file_date,omitempty"`
    LoadDate *time.Time `json:"load_date,omitempty"`
    Name *string `json:"name,omitempty"`
    Office *string `json:"office,omitempty"`
    OfficeFull *string `json:"office_full,omitempty"`
    Party *string `json:"party,omitempty"`
    PartyFull *string `json:"party_full,omitempty"`
    Receipts *float64 `json:"receipts,omitempty"`
    RoundedElectionYears []int32 `json:"rounded_election_years,omitempty"`
    State *string `json:"state,omitempty"`
    TwoYearPeriod int32 `json:"two_year_period"`
    
}

