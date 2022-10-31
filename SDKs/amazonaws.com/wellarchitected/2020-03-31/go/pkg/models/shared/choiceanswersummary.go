package shared



type ChoiceAnswerSummary struct {
    ChoiceID *string `json:"ChoiceId,omitempty"`
    Reason *ChoiceReasonEnum `json:"Reason,omitempty"`
    Status *ChoiceStatusEnum `json:"Status,omitempty"`
    
}

