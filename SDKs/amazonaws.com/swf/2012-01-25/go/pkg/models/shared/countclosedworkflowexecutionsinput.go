package shared

type CountClosedWorkflowExecutionsInput struct {
	CloseStatusFilter *CloseStatusFilter       `json:"closeStatusFilter"`
	CloseTimeFilter   *ExecutionTimeFilter     `json:"closeTimeFilter"`
	Domain            string                   `json:"domain"`
	ExecutionFilter   *WorkflowExecutionFilter `json:"executionFilter"`
	StartTimeFilter   *ExecutionTimeFilter     `json:"startTimeFilter"`
	TagFilter         *TagFilter               `json:"tagFilter"`
	TypeFilter        *WorkflowTypeFilter      `json:"typeFilter"`
}
