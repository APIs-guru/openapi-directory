package shared

type ListExecutionsResponse struct {
	Executions []ListedExecution `json:"Executions"`
	NextToken  *string           `json:"NextToken,omitempty"`
	WorkflowID string            `json:"WorkflowId"`
}
