package shared

type RequestCancelExternalWorkflowExecutionInitiatedEventAttributes struct {
	Control                      *string `json:"control"`
	DecisionTaskCompletedEventID int64   `json:"decisionTaskCompletedEventId"`
	RunID                        *string `json:"runId"`
	WorkflowID                   string  `json:"workflowId"`
}
