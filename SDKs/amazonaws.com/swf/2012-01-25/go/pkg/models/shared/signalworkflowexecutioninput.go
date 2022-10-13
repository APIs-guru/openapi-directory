package shared

type SignalWorkflowExecutionInput struct {
	Domain     string  `json:"domain"`
	Input      *string `json:"input"`
	RunID      *string `json:"runId"`
	SignalName string  `json:"signalName"`
	WorkflowID string  `json:"workflowId"`
}
