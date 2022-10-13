package shared

type Answer struct {
	ChoiceAnswers       []ChoiceAnswer    `json:"ChoiceAnswers"`
	Choices             []Choice          `json:"Choices"`
	HelpfulResourceURL  *string           `json:"HelpfulResourceUrl"`
	ImprovementPlanURL  *string           `json:"ImprovementPlanUrl"`
	IsApplicable        *bool             `json:"IsApplicable"`
	Notes               *string           `json:"Notes"`
	PillarID            *string           `json:"PillarId"`
	QuestionDescription *string           `json:"QuestionDescription"`
	QuestionID          *string           `json:"QuestionId"`
	QuestionTitle       *string           `json:"QuestionTitle"`
	Reason              *AnswerReasonEnum `json:"Reason"`
	Risk                *RiskEnum         `json:"Risk"`
	SelectedChoices     []string          `json:"SelectedChoices"`
}
