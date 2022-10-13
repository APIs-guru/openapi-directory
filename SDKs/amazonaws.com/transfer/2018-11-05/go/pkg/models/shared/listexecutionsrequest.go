package shared

type ListExecutionsRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	WorkflowID string  `json:"WorkflowId"`
}
