package shared

// WorkflowExecutionSignaledEventAttributes
// Provides the details of the <code>WorkflowExecutionSignaled</code> event.
type WorkflowExecutionSignaledEventAttributes struct {
	ExternalInitiatedEventID  *int64             `json:"externalInitiatedEventId,omitempty"`
	ExternalWorkflowExecution *WorkflowExecution `json:"externalWorkflowExecution,omitempty"`
	Input                     *string            `json:"input,omitempty"`
	SignalName                string             `json:"signalName"`
}
