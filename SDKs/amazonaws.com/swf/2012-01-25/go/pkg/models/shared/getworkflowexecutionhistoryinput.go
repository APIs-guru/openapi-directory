package shared

type GetWorkflowExecutionHistoryInput struct {
	Domain          string            `json:"domain"`
	Execution       WorkflowExecution `json:"execution"`
	MaximumPageSize *int64            `json:"maximumPageSize"`
	NextPageToken   *string           `json:"nextPageToken"`
	ReverseOrder    *bool             `json:"reverseOrder"`
}
