package shared

type WorkflowExecutionTimedOutEventAttributes struct {
	ChildPolicy ChildPolicyEnum                  `json:"childPolicy"`
	TimeoutType WorkflowExecutionTimeoutTypeEnum `json:"timeoutType"`
}
