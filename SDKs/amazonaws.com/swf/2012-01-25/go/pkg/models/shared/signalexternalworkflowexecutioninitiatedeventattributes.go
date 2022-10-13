package shared

type SignalExternalWorkflowExecutionInitiatedEventAttributes struct {
	Control                      *string `json:"control"`
	DecisionTaskCompletedEventID int64   `json:"decisionTaskCompletedEventId"`
	Input                        *string `json:"input"`
	RunID                        *string `json:"runId"`
	SignalName                   string  `json:"signalName"`
	WorkflowID                   string  `json:"workflowId"`
}
