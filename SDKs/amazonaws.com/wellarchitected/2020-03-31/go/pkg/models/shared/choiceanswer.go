package shared

type ChoiceAnswer struct {
	ChoiceID *string           `json:"ChoiceId"`
	Notes    *string           `json:"Notes"`
	Reason   *ChoiceReasonEnum `json:"Reason"`
	Status   *ChoiceStatusEnum `json:"Status"`
}
