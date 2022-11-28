package shared

// ExternalWorkflowExecutionSignaledEventAttributes
// Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event.
type ExternalWorkflowExecutionSignaledEventAttributes struct {
	InitiatedEventID  int64             `json:"initiatedEventId"`
	WorkflowExecution WorkflowExecution `json:"workflowExecution"`
}
