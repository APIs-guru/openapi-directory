package shared

type PresidentialSummary struct {
	CandidateContributionsLessRepayments *float64 `json:"candidate_contributions_less_repayments,omitempty"`
	CandidateID                          *string  `json:"candidate_id,omitempty"`
	CandidateLastName                    *string  `json:"candidate_last_name,omitempty"`
	CandidateName                        *string  `json:"candidate_name,omitempty"`
	CandidatePartyAffiliation            *string  `json:"candidate_party_affiliation,omitempty"`
	CashOnHandEnd                        *float64 `json:"cash_on_hand_end,omitempty"`
	CommitteeDesignation                 *string  `json:"committee_designation,omitempty"`
	CommitteeID                          *string  `json:"committee_id,omitempty"`
	CommitteeName                        *string  `json:"committee_name,omitempty"`
	CommitteeType                        *string  `json:"committee_type,omitempty"`
	DebtsOwedByCommittee                 *float64 `json:"debts_owed_by_committee,omitempty"`
	DisbursementsLessOffsets             *float64 `json:"disbursements_less_offsets,omitempty"`
	ElectionYear                         *int32   `json:"election_year,omitempty"`
	ExemptLegalAccountingDisbursement    *float64 `json:"exempt_legal_accounting_disbursement,omitempty"`
	FederalFunds                         *float64 `json:"federal_funds,omitempty"`
	FundraisingDisbursements             *float64 `json:"fundraising_disbursements,omitempty"`
	IndividualContributionsLessRefunds   *float64 `json:"individual_contributions_less_refunds,omitempty"`
	NetReceipts                          *float64 `json:"net_receipts,omitempty"`
	OffsetsToOperatingExpenditures       *float64 `json:"offsets_to_operating_expenditures,omitempty"`
	OperatingExpenditures                *float64 `json:"operating_expenditures,omitempty"`
	OtherDisbursements                   *float64 `json:"other_disbursements,omitempty"`
	PacContributionsLessRefunds          *float64 `json:"pac_contributions_less_refunds,omitempty"`
	PartyContributionsLessRefunds        *float64 `json:"party_contributions_less_refunds,omitempty"`
	RepaymentsLoansMadeByCandidate       *float64 `json:"repayments_loans_made_by_candidate,omitempty"`
	RepaymentsOtherLoans                 *float64 `json:"repayments_other_loans,omitempty"`
	RoundedNetReceipts                   *float64 `json:"rounded_net_receipts,omitempty"`
	TotalContributionRefunds             *float64 `json:"total_contribution_refunds,omitempty"`
	TotalLoanRepaymentsMade              *float64 `json:"total_loan_repayments_made,omitempty"`
	TransfersFromAffiliatedCommittees    *float64 `json:"transfers_from_affiliated_committees,omitempty"`
	TransfersToOtherAuthorizedCommittees *float64 `json:"transfers_to_other_authorized_committees,omitempty"`
}
