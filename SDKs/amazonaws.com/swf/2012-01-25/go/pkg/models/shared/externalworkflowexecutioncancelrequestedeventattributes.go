package shared

// ExternalWorkflowExecutionCancelRequestedEventAttributes
// Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event.
type ExternalWorkflowExecutionCancelRequestedEventAttributes struct {
	InitiatedEventID  int64             `json:"initiatedEventId"`
	WorkflowExecution WorkflowExecution `json:"workflowExecution"`
}
