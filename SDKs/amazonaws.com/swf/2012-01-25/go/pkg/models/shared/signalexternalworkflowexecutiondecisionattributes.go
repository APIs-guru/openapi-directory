package shared

type SignalExternalWorkflowExecutionDecisionAttributes struct {
	Control    *string `json:"control"`
	Input      *string `json:"input"`
	RunID      *string `json:"runId"`
	SignalName string  `json:"signalName"`
	WorkflowID string  `json:"workflowId"`
}
