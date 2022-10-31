package shared

type ChildWorkflowExecutionCanceledEventAttributes struct {
	Details           *string           `json:"details,omitempty"`
	InitiatedEventID  int64             `json:"initiatedEventId"`
	StartedEventID    int64             `json:"startedEventId"`
	WorkflowExecution WorkflowExecution `json:"workflowExecution"`
	WorkflowType      WorkflowType      `json:"workflowType"`
}
