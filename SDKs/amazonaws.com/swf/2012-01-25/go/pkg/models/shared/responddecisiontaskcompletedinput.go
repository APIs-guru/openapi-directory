package shared

// RespondDecisionTaskCompletedInput
// Input data for a TaskCompleted response to a decision task.
type RespondDecisionTaskCompletedInput struct {
	Decisions        []Decision `json:"decisions,omitempty"`
	ExecutionContext *string    `json:"executionContext,omitempty"`
	TaskToken        string     `json:"taskToken"`
}
