package shared

type RespondDecisionTaskCompletedInput struct {
	Decisions        []Decision `json:"decisions,omitempty"`
	ExecutionContext *string    `json:"executionContext,omitempty"`
	TaskToken        string     `json:"taskToken"`
}
