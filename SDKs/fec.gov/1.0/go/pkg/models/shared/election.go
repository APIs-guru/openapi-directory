package shared

import (
	"time"
)

type Election struct {
	CandidateElectionYear  *int32     `json:"candidate_election_year,omitempty"`
	CandidateID            *string    `json:"candidate_id,omitempty"`
	CandidateName          *string    `json:"candidate_name,omitempty"`
	CandidatePccID         *string    `json:"candidate_pcc_id,omitempty"`
	CandidatePccName       *string    `json:"candidate_pcc_name,omitempty"`
	CashOnHandEndPeriod    *float64   `json:"cash_on_hand_end_period,omitempty"`
	CommitteeIds           []string   `json:"committee_ids,omitempty"`
	CoverageEndDate        *time.Time `json:"coverage_end_date,omitempty"`
	IncumbentChallengeFull *string    `json:"incumbent_challenge_full,omitempty"`
	PartyFull              *string    `json:"party_full,omitempty"`
	TotalDisbursements     *float64   `json:"total_disbursements,omitempty"`
	TotalReceipts          *float64   `json:"total_receipts,omitempty"`
}
