package shared

// WorkflowExecutionFilter
// Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.
type WorkflowExecutionFilter struct {
	WorkflowID string `json:"workflowId"`
}
