package shared

type ListOpenWorkflowExecutionsInput struct {
	Domain          string                   `json:"domain"`
	ExecutionFilter *WorkflowExecutionFilter `json:"executionFilter"`
	MaximumPageSize *int64                   `json:"maximumPageSize"`
	NextPageToken   *string                  `json:"nextPageToken"`
	ReverseOrder    *bool                    `json:"reverseOrder"`
	StartTimeFilter ExecutionTimeFilter      `json:"startTimeFilter"`
	TagFilter       *TagFilter               `json:"tagFilter"`
	TypeFilter      *WorkflowTypeFilter      `json:"typeFilter"`
}
