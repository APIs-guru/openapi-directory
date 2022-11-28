package shared

// ChoiceUpdate
// A list of choices to be updated.
type ChoiceUpdate struct {
	Notes  *string           `json:"Notes,omitempty"`
	Reason *ChoiceReasonEnum `json:"Reason,omitempty"`
	Status ChoiceStatusEnum  `json:"Status"`
}
