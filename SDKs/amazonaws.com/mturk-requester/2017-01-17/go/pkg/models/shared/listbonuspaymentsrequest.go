package shared

type ListBonusPaymentsRequest struct {
	AssignmentID *string `json:"AssignmentId"`
	HitID        *string `json:"HITId"`
	MaxResults   *int64  `json:"MaxResults"`
	NextToken    *string `json:"NextToken"`
}
