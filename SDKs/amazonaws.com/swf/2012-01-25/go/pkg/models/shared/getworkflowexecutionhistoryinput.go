package shared

type GetWorkflowExecutionHistoryInput struct {
	Domain          string            `json:"domain"`
	Execution       WorkflowExecution `json:"execution"`
	MaximumPageSize *int64            `json:"maximumPageSize,omitempty"`
	NextPageToken   *string           `json:"nextPageToken,omitempty"`
	ReverseOrder    *bool             `json:"reverseOrder,omitempty"`
}
