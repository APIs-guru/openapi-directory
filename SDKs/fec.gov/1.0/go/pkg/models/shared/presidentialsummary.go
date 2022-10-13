package shared

type PresidentialSummary struct {
	CandidateContributionsLessRepayments *float64 `json:"candidate_contributions_less_repayments"`
	CandidateID                          *string  `json:"candidate_id"`
	CandidateLastName                    *string  `json:"candidate_last_name"`
	CandidateName                        *string  `json:"candidate_name"`
	CandidatePartyAffiliation            *string  `json:"candidate_party_affiliation"`
	CashOnHandEnd                        *float64 `json:"cash_on_hand_end"`
	CommitteeDesignation                 *string  `json:"committee_designation"`
	CommitteeID                          *string  `json:"committee_id"`
	CommitteeName                        *string  `json:"committee_name"`
	CommitteeType                        *string  `json:"committee_type"`
	DebtsOwedByCommittee                 *float64 `json:"debts_owed_by_committee"`
	DisbursementsLessOffsets             *float64 `json:"disbursements_less_offsets"`
	ElectionYear                         *int32   `json:"election_year"`
	ExemptLegalAccountingDisbursement    *float64 `json:"exempt_legal_accounting_disbursement"`
	FederalFunds                         *float64 `json:"federal_funds"`
	FundraisingDisbursements             *float64 `json:"fundraising_disbursements"`
	IndividualContributionsLessRefunds   *float64 `json:"individual_contributions_less_refunds"`
	NetReceipts                          *float64 `json:"net_receipts"`
	OffsetsToOperatingExpenditures       *float64 `json:"offsets_to_operating_expenditures"`
	OperatingExpenditures                *float64 `json:"operating_expenditures"`
	OtherDisbursements                   *float64 `json:"other_disbursements"`
	PacContributionsLessRefunds          *float64 `json:"pac_contributions_less_refunds"`
	PartyContributionsLessRefunds        *float64 `json:"party_contributions_less_refunds"`
	RepaymentsLoansMadeByCandidate       *float64 `json:"repayments_loans_made_by_candidate"`
	RepaymentsOtherLoans                 *float64 `json:"repayments_other_loans"`
	RoundedNetReceipts                   *float64 `json:"rounded_net_receipts"`
	TotalContributionRefunds             *float64 `json:"total_contribution_refunds"`
	TotalLoanRepaymentsMade              *float64 `json:"total_loan_repayments_made"`
	TransfersFromAffiliatedCommittees    *float64 `json:"transfers_from_affiliated_committees"`
	TransfersToOtherAuthorizedCommittees *float64 `json:"transfers_to_other_authorized_committees"`
}
