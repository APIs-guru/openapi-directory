package shared

type CountOpenWorkflowExecutionsInput struct {
	Domain          string                   `json:"domain"`
	ExecutionFilter *WorkflowExecutionFilter `json:"executionFilter"`
	StartTimeFilter ExecutionTimeFilter      `json:"startTimeFilter"`
	TagFilter       *TagFilter               `json:"tagFilter"`
	TypeFilter      *WorkflowTypeFilter      `json:"typeFilter"`
}
