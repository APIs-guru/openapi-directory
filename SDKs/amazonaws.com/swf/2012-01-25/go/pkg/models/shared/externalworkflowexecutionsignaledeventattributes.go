package shared

type ExternalWorkflowExecutionSignaledEventAttributes struct {
	InitiatedEventID  int64             `json:"initiatedEventId"`
	WorkflowExecution WorkflowExecution `json:"workflowExecution"`
}
