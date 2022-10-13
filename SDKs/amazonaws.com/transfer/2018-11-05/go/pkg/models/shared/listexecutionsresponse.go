package shared

type ListExecutionsResponse struct {
	Executions []ListedExecution `json:"Executions"`
	NextToken  *string           `json:"NextToken"`
	WorkflowID string            `json:"WorkflowId"`
}
