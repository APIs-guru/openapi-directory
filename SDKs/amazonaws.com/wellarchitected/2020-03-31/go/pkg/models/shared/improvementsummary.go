package shared

type ImprovementSummary struct {
	ImprovementPlanURL *string   `json:"ImprovementPlanUrl"`
	PillarID           *string   `json:"PillarId"`
	QuestionID         *string   `json:"QuestionId"`
	QuestionTitle      *string   `json:"QuestionTitle"`
	Risk               *RiskEnum `json:"Risk"`
}
