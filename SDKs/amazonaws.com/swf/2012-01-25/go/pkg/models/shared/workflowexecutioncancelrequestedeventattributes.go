package shared

type WorkflowExecutionCancelRequestedEventAttributes struct {
	Cause                     *WorkflowExecutionCancelRequestedCauseEnum `json:"cause"`
	ExternalInitiatedEventID  *int64                                     `json:"externalInitiatedEventId"`
	ExternalWorkflowExecution *WorkflowExecution                         `json:"externalWorkflowExecution"`
}
