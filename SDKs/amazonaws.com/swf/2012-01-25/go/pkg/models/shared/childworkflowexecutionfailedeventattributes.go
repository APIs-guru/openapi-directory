package shared

type ChildWorkflowExecutionFailedEventAttributes struct {
	Details           *string           `json:"details"`
	InitiatedEventID  int64             `json:"initiatedEventId"`
	Reason            *string           `json:"reason"`
	StartedEventID    int64             `json:"startedEventId"`
	WorkflowExecution WorkflowExecution `json:"workflowExecution"`
	WorkflowType      WorkflowType      `json:"workflowType"`
}
