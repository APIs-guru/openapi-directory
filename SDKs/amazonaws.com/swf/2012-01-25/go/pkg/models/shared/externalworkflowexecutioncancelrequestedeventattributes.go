package shared

type ExternalWorkflowExecutionCancelRequestedEventAttributes struct {
	InitiatedEventID  int64             `json:"initiatedEventId"`
	WorkflowExecution WorkflowExecution `json:"workflowExecution"`
}
