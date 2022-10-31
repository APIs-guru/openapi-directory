package shared

type ListBonusPaymentsRequest struct {
	AssignmentID *string `json:"AssignmentId,omitempty"`
	HitID        *string `json:"HITId,omitempty"`
	MaxResults   *int64  `json:"MaxResults,omitempty"`
	NextToken    *string `json:"NextToken,omitempty"`
}
