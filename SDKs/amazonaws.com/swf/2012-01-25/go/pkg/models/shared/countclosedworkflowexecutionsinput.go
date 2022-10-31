package shared

type CountClosedWorkflowExecutionsInput struct {
	CloseStatusFilter *CloseStatusFilter       `json:"closeStatusFilter,omitempty"`
	CloseTimeFilter   *ExecutionTimeFilter     `json:"closeTimeFilter,omitempty"`
	Domain            string                   `json:"domain"`
	ExecutionFilter   *WorkflowExecutionFilter `json:"executionFilter,omitempty"`
	StartTimeFilter   *ExecutionTimeFilter     `json:"startTimeFilter,omitempty"`
	TagFilter         *TagFilter               `json:"tagFilter,omitempty"`
	TypeFilter        *WorkflowTypeFilter      `json:"typeFilter,omitempty"`
}
