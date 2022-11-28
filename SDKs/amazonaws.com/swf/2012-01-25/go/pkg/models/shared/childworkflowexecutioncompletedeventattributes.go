package shared

// ChildWorkflowExecutionCompletedEventAttributes
// Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event.
type ChildWorkflowExecutionCompletedEventAttributes struct {
	InitiatedEventID  int64             `json:"initiatedEventId"`
	Result            *string           `json:"result,omitempty"`
	StartedEventID    int64             `json:"startedEventId"`
	WorkflowExecution WorkflowExecution `json:"workflowExecution"`
	WorkflowType      WorkflowType      `json:"workflowType"`
}
