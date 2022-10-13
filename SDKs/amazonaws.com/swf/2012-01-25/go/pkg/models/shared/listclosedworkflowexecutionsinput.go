package shared

type ListClosedWorkflowExecutionsInput struct {
	CloseStatusFilter *CloseStatusFilter       `json:"closeStatusFilter"`
	CloseTimeFilter   *ExecutionTimeFilter     `json:"closeTimeFilter"`
	Domain            string                   `json:"domain"`
	ExecutionFilter   *WorkflowExecutionFilter `json:"executionFilter"`
	MaximumPageSize   *int64                   `json:"maximumPageSize"`
	NextPageToken     *string                  `json:"nextPageToken"`
	ReverseOrder      *bool                    `json:"reverseOrder"`
	StartTimeFilter   *ExecutionTimeFilter     `json:"startTimeFilter"`
	TagFilter         *TagFilter               `json:"tagFilter"`
	TypeFilter        *WorkflowTypeFilter      `json:"typeFilter"`
}
