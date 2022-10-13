package shared

type AnswerSummary struct {
	ChoiceAnswerSummaries []ChoiceAnswerSummary `json:"ChoiceAnswerSummaries"`
	Choices               []Choice              `json:"Choices"`
	IsApplicable          *bool                 `json:"IsApplicable"`
	PillarID              *string               `json:"PillarId"`
	QuestionID            *string               `json:"QuestionId"`
	QuestionTitle         *string               `json:"QuestionTitle"`
	Reason                *AnswerReasonEnum     `json:"Reason"`
	Risk                  *RiskEnum             `json:"Risk"`
	SelectedChoices       []string              `json:"SelectedChoices"`
}
