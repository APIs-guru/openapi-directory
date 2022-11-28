package shared

// RequestCancelExternalWorkflowExecutionFailedEventAttributes
// Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event.
type RequestCancelExternalWorkflowExecutionFailedEventAttributes struct {
	Cause                        RequestCancelExternalWorkflowExecutionFailedCauseEnum `json:"cause"`
	Control                      *string                                               `json:"control,omitempty"`
	DecisionTaskCompletedEventID int64                                                 `json:"decisionTaskCompletedEventId"`
	InitiatedEventID             int64                                                 `json:"initiatedEventId"`
	RunID                        *string                                               `json:"runId,omitempty"`
	WorkflowID                   string                                                `json:"workflowId"`
}
