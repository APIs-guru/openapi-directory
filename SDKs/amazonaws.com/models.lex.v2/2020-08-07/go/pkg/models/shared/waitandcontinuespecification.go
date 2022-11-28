package shared

// WaitAndContinueSpecification
// Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
type WaitAndContinueSpecification struct {
	Active               *bool                              `json:"active,omitempty"`
	ContinueResponse     ResponseSpecification              `json:"continueResponse"`
	StillWaitingResponse *StillWaitingResponseSpecification `json:"stillWaitingResponse,omitempty"`
	WaitingResponse      ResponseSpecification              `json:"waitingResponse"`
}
