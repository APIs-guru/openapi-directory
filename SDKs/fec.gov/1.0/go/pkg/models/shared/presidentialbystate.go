package shared

type PresidentialByState struct {
	CandidateID               *string  `json:"candidate_id"`
	ContributionReceiptAmount *float64 `json:"contribution_receipt_amount"`
	ContributionState         *string  `json:"contribution_state"`
	ElectionYear              *int32   `json:"election_year"`
}
