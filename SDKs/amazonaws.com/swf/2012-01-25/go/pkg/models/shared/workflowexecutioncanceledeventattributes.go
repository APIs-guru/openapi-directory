package shared

// WorkflowExecutionCanceledEventAttributes
// Provides the details of the <code>WorkflowExecutionCanceled</code> event.
type WorkflowExecutionCanceledEventAttributes struct {
	DecisionTaskCompletedEventID int64   `json:"decisionTaskCompletedEventId"`
	Details                      *string `json:"details,omitempty"`
}
