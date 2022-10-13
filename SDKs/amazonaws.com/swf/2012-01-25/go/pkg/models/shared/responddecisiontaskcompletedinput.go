package shared

type RespondDecisionTaskCompletedInput struct {
	Decisions        []Decision `json:"decisions"`
	ExecutionContext *string    `json:"executionContext"`
	TaskToken        string     `json:"taskToken"`
}
