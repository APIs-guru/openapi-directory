package shared

// ChildWorkflowExecutionTimedOutEventAttributes
// Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event.
type ChildWorkflowExecutionTimedOutEventAttributes struct {
	InitiatedEventID  int64                            `json:"initiatedEventId"`
	StartedEventID    int64                            `json:"startedEventId"`
	TimeoutType       WorkflowExecutionTimeoutTypeEnum `json:"timeoutType"`
	WorkflowExecution WorkflowExecution                `json:"workflowExecution"`
	WorkflowType      WorkflowType                     `json:"workflowType"`
}
