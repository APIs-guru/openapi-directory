package shared

type ListExecutionsOutput struct {
	Executions []ExecutionSummary `json:"executions"`
	NextToken  *string            `json:"nextToken"`
}
