package shared

type WaitAndContinueSpecification struct {
	Active               *bool                              `json:"active"`
	ContinueResponse     ResponseSpecification              `json:"continueResponse"`
	StillWaitingResponse *StillWaitingResponseSpecification `json:"stillWaitingResponse"`
	WaitingResponse      ResponseSpecification              `json:"waitingResponse"`
}
