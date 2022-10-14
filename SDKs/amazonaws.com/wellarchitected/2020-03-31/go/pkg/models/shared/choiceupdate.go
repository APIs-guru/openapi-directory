package shared

type ChoiceUpdate struct {
	Notes  *string           `json:"Notes,omitempty"`
	Reason *ChoiceReasonEnum `json:"Reason,omitempty"`
	Status ChoiceStatusEnum  `json:"Status"`
}
