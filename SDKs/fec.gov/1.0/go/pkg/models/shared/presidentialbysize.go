package shared

type PresidentialBySize struct {
	CandidateID               *string  `json:"candidate_id,omitempty"`
	ContributionReceiptAmount *float64 `json:"contribution_receipt_amount,omitempty"`
	ElectionYear              *int32   `json:"election_year,omitempty"`
	Size                      *int32   `json:"size,omitempty"`
	SizeRangeID               *int32   `json:"size_range_id,omitempty"`
}
