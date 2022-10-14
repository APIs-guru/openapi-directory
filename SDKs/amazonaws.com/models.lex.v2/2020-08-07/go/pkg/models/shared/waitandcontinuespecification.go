package shared

type WaitAndContinueSpecification struct {
	Active               *bool                              `json:"active,omitempty"`
	ContinueResponse     ResponseSpecification              `json:"continueResponse"`
	StillWaitingResponse *StillWaitingResponseSpecification `json:"stillWaitingResponse,omitempty"`
	WaitingResponse      ResponseSpecification              `json:"waitingResponse"`
}
