package shared

// CancelWorkflowExecutionFailedEventAttributes
// Provides the details of the <code>CancelWorkflowExecutionFailed</code> event.
type CancelWorkflowExecutionFailedEventAttributes struct {
	Cause                        CancelWorkflowExecutionFailedCauseEnum `json:"cause"`
	DecisionTaskCompletedEventID int64                                  `json:"decisionTaskCompletedEventId"`
}
