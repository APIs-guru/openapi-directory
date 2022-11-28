package shared

// WorkflowExecutionCount
// Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a>
type WorkflowExecutionCount struct {
	Count     int64 `json:"count"`
	Truncated *bool `json:"truncated,omitempty"`
}
