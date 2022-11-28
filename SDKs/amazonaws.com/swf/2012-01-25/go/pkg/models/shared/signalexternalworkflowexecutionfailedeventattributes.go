package shared

// SignalExternalWorkflowExecutionFailedEventAttributes
// Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event.
type SignalExternalWorkflowExecutionFailedEventAttributes struct {
	Cause                        SignalExternalWorkflowExecutionFailedCauseEnum `json:"cause"`
	Control                      *string                                        `json:"control,omitempty"`
	DecisionTaskCompletedEventID int64                                          `json:"decisionTaskCompletedEventId"`
	InitiatedEventID             int64                                          `json:"initiatedEventId"`
	RunID                        *string                                        `json:"runId,omitempty"`
	WorkflowID                   string                                         `json:"workflowId"`
}
