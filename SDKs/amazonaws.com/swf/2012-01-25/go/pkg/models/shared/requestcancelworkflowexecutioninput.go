package shared

type RequestCancelWorkflowExecutionInput struct {
	Domain     string  `json:"domain"`
	RunID      *string `json:"runId"`
	WorkflowID string  `json:"workflowId"`
}
