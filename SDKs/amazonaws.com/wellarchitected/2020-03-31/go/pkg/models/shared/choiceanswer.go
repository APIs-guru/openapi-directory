package shared

type ChoiceAnswer struct {
	ChoiceID *string           `json:"ChoiceId,omitempty"`
	Notes    *string           `json:"Notes,omitempty"`
	Reason   *ChoiceReasonEnum `json:"Reason,omitempty"`
	Status   *ChoiceStatusEnum `json:"Status,omitempty"`
}
