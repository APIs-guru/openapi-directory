package shared

// WorkflowExecutionTimedOutEventAttributes
// Provides the details of the <code>WorkflowExecutionTimedOut</code> event.
type WorkflowExecutionTimedOutEventAttributes struct {
	ChildPolicy ChildPolicyEnum                  `json:"childPolicy"`
	TimeoutType WorkflowExecutionTimeoutTypeEnum `json:"timeoutType"`
}
