package shared

type ListExecutionsRequest struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	WorkflowID string  `json:"WorkflowId"`
}
