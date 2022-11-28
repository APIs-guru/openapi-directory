package shared

// WorkflowExecutionCancelRequestedEventAttributes
// Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.
type WorkflowExecutionCancelRequestedEventAttributes struct {
	Cause                     *WorkflowExecutionCancelRequestedCauseEnum `json:"cause,omitempty"`
	ExternalInitiatedEventID  *int64                                     `json:"externalInitiatedEventId,omitempty"`
	ExternalWorkflowExecution *WorkflowExecution                         `json:"externalWorkflowExecution,omitempty"`
}
