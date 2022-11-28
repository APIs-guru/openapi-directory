package shared

// WorkflowExecutionTerminatedEventAttributes
// Provides the details of the <code>WorkflowExecutionTerminated</code> event.
type WorkflowExecutionTerminatedEventAttributes struct {
	Cause       *WorkflowExecutionTerminatedCauseEnum `json:"cause,omitempty"`
	ChildPolicy ChildPolicyEnum                       `json:"childPolicy"`
	Details     *string                               `json:"details,omitempty"`
	Reason      *string                               `json:"reason,omitempty"`
}
