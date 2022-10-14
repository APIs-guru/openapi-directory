package shared

type ListExecutionsOutput struct {
	Executions []ExecutionListItem `json:"executions"`
	NextToken  *string             `json:"nextToken,omitempty"`
}
