package shared

type WorkflowExecutionCancelRequestedEventAttributes struct {
	Cause                     *WorkflowExecutionCancelRequestedCauseEnum `json:"cause,omitempty"`
	ExternalInitiatedEventID  *int64                                     `json:"externalInitiatedEventId,omitempty"`
	ExternalWorkflowExecution *WorkflowExecution                         `json:"externalWorkflowExecution,omitempty"`
}
