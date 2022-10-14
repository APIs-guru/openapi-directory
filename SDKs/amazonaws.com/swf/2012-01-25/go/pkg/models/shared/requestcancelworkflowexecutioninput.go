package shared

type RequestCancelWorkflowExecutionInput struct {
	Domain     string  `json:"domain"`
	RunID      *string `json:"runId,omitempty"`
	WorkflowID string  `json:"workflowId"`
}
