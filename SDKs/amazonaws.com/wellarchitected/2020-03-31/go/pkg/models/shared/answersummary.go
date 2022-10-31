package shared



type AnswerSummary struct {
    ChoiceAnswerSummaries []ChoiceAnswerSummary `json:"ChoiceAnswerSummaries,omitempty"`
    Choices []Choice `json:"Choices,omitempty"`
    IsApplicable *bool `json:"IsApplicable,omitempty"`
    PillarID *string `json:"PillarId,omitempty"`
    QuestionID *string `json:"QuestionId,omitempty"`
    QuestionTitle *string `json:"QuestionTitle,omitempty"`
    Reason *AnswerReasonEnum `json:"Reason,omitempty"`
    Risk *RiskEnum `json:"Risk,omitempty"`
    SelectedChoices []string `json:"SelectedChoices,omitempty"`
    
}

