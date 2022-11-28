package shared

// CompleteWorkflowExecutionFailedEventAttributes
// Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event.
type CompleteWorkflowExecutionFailedEventAttributes struct {
	Cause                        CompleteWorkflowExecutionFailedCauseEnum `json:"cause"`
	DecisionTaskCompletedEventID int64                                    `json:"decisionTaskCompletedEventId"`
}
