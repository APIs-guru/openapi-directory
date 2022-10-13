package shared

type SignalExternalWorkflowExecutionFailedEventAttributes struct {
	Cause                        SignalExternalWorkflowExecutionFailedCauseEnum `json:"cause"`
	Control                      *string                                        `json:"control"`
	DecisionTaskCompletedEventID int64                                          `json:"decisionTaskCompletedEventId"`
	InitiatedEventID             int64                                          `json:"initiatedEventId"`
	RunID                        *string                                        `json:"runId"`
	WorkflowID                   string                                         `json:"workflowId"`
}
