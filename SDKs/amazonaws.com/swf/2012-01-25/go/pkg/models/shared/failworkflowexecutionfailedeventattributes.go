package shared

// FailWorkflowExecutionFailedEventAttributes
// Provides the details of the <code>FailWorkflowExecutionFailed</code> event.
type FailWorkflowExecutionFailedEventAttributes struct {
	Cause                        FailWorkflowExecutionFailedCauseEnum `json:"cause"`
	DecisionTaskCompletedEventID int64                                `json:"decisionTaskCompletedEventId"`
}
