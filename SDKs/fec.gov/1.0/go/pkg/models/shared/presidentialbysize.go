package shared

type PresidentialBySize struct {
	CandidateID               *string  `json:"candidate_id"`
	ContributionReceiptAmount *float64 `json:"contribution_receipt_amount"`
	ElectionYear              *int32   `json:"election_year"`
	Size                      *int32   `json:"size"`
	SizeRangeID               *int32   `json:"size_range_id"`
}
