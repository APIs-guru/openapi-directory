package shared

// ContinueAsNewWorkflowExecutionFailedEventAttributes
// Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event.
type ContinueAsNewWorkflowExecutionFailedEventAttributes struct {
	Cause                        ContinueAsNewWorkflowExecutionFailedCauseEnum `json:"cause"`
	DecisionTaskCompletedEventID int64                                         `json:"decisionTaskCompletedEventId"`
}
