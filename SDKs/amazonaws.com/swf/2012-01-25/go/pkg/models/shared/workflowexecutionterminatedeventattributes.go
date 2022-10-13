package shared

type WorkflowExecutionTerminatedEventAttributes struct {
	Cause       *WorkflowExecutionTerminatedCauseEnum `json:"cause"`
	ChildPolicy ChildPolicyEnum                       `json:"childPolicy"`
	Details     *string                               `json:"details"`
	Reason      *string                               `json:"reason"`
}
