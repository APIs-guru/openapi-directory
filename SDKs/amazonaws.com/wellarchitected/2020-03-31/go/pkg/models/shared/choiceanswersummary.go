package shared

// ChoiceAnswerSummary
// A choice summary that has been answered on a question in your workload.
type ChoiceAnswerSummary struct {
	ChoiceID *string           `json:"ChoiceId,omitempty"`
	Reason   *ChoiceReasonEnum `json:"Reason,omitempty"`
	Status   *ChoiceStatusEnum `json:"Status,omitempty"`
}
