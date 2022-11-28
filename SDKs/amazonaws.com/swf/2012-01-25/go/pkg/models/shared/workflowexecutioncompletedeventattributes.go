package shared

// WorkflowExecutionCompletedEventAttributes
// Provides the details of the <code>WorkflowExecutionCompleted</code> event.
type WorkflowExecutionCompletedEventAttributes struct {
	DecisionTaskCompletedEventID int64   `json:"decisionTaskCompletedEventId"`
	Result                       *string `json:"result,omitempty"`
}
