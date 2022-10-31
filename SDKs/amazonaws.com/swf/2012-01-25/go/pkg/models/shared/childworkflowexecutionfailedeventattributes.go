package shared

type ChildWorkflowExecutionFailedEventAttributes struct {
	Details           *string           `json:"details,omitempty"`
	InitiatedEventID  int64             `json:"initiatedEventId"`
	Reason            *string           `json:"reason,omitempty"`
	StartedEventID    int64             `json:"startedEventId"`
	WorkflowExecution WorkflowExecution `json:"workflowExecution"`
	WorkflowType      WorkflowType      `json:"workflowType"`
}
