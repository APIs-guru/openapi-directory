package shared

type ChoiceAnswerSummary struct {
	ChoiceID *string           `json:"ChoiceId"`
	Reason   *ChoiceReasonEnum `json:"Reason"`
	Status   *ChoiceStatusEnum `json:"Status"`
}
