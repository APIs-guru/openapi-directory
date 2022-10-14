package shared

type SignalExternalWorkflowExecutionDecisionAttributes struct {
	Control    *string `json:"control,omitempty"`
	Input      *string `json:"input,omitempty"`
	RunID      *string `json:"runId,omitempty"`
	SignalName string  `json:"signalName"`
	WorkflowID string  `json:"workflowId"`
}
