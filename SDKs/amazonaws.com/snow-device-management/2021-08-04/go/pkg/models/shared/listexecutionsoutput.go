package shared

type ListExecutionsOutput struct {
	Executions []ExecutionSummary `json:"executions,omitempty"`
	NextToken  *string            `json:"nextToken,omitempty"`
}
