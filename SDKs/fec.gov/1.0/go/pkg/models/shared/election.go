package shared

import (
	"time"
)

type Election struct {
	CandidateElectionYear  *int32     `json:"candidate_election_year"`
	CandidateID            *string    `json:"candidate_id"`
	CandidateName          *string    `json:"candidate_name"`
	CandidatePccID         *string    `json:"candidate_pcc_id"`
	CandidatePccName       *string    `json:"candidate_pcc_name"`
	CashOnHandEndPeriod    *float64   `json:"cash_on_hand_end_period"`
	CommitteeIds           []string   `json:"committee_ids"`
	CoverageEndDate        *time.Time `json:"coverage_end_date"`
	IncumbentChallengeFull *string    `json:"incumbent_challenge_full"`
	PartyFull              *string    `json:"party_full"`
	TotalDisbursements     *float64   `json:"total_disbursements"`
	TotalReceipts          *float64   `json:"total_receipts"`
}
