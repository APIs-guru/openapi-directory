package shared

// WorkflowExecutionFailedEventAttributes
// Provides the details of the <code>WorkflowExecutionFailed</code> event.
type WorkflowExecutionFailedEventAttributes struct {
	DecisionTaskCompletedEventID int64   `json:"decisionTaskCompletedEventId"`
	Details                      *string `json:"details,omitempty"`
	Reason                       *string `json:"reason,omitempty"`
}
