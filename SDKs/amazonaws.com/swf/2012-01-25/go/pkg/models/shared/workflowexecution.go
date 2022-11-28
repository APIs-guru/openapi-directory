package shared

// WorkflowExecution
// Represents a workflow execution.
type WorkflowExecution struct {
	RunID      string `json:"runId"`
	WorkflowID string `json:"workflowId"`
}
