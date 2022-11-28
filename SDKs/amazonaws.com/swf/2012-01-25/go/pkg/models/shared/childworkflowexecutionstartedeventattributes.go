package shared

// ChildWorkflowExecutionStartedEventAttributes
// Provides the details of the <code>ChildWorkflowExecutionStarted</code> event.
type ChildWorkflowExecutionStartedEventAttributes struct {
	InitiatedEventID  int64             `json:"initiatedEventId"`
	WorkflowExecution WorkflowExecution `json:"workflowExecution"`
	WorkflowType      WorkflowType      `json:"workflowType"`
}
