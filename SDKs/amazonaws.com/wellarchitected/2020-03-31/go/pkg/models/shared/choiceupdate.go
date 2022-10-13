package shared

type ChoiceUpdate struct {
	Notes  *string           `json:"Notes"`
	Reason *ChoiceReasonEnum `json:"Reason"`
	Status ChoiceStatusEnum  `json:"Status"`
}
