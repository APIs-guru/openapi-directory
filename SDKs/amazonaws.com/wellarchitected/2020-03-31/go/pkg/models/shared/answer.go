package shared



type Answer struct {
    ChoiceAnswers []ChoiceAnswer `json:"ChoiceAnswers,omitempty"`
    Choices []Choice `json:"Choices,omitempty"`
    HelpfulResourceURL *string `json:"HelpfulResourceUrl,omitempty"`
    ImprovementPlanURL *string `json:"ImprovementPlanUrl,omitempty"`
    IsApplicable *bool `json:"IsApplicable,omitempty"`
    Notes *string `json:"Notes,omitempty"`
    PillarID *string `json:"PillarId,omitempty"`
    QuestionDescription *string `json:"QuestionDescription,omitempty"`
    QuestionID *string `json:"QuestionId,omitempty"`
    QuestionTitle *string `json:"QuestionTitle,omitempty"`
    Reason *AnswerReasonEnum `json:"Reason,omitempty"`
    Risk *RiskEnum `json:"Risk,omitempty"`
    SelectedChoices []string `json:"SelectedChoices,omitempty"`
    
}

