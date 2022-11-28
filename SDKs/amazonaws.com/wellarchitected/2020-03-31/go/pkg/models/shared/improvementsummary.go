package shared

// ImprovementSummary
// An improvement summary of a lens review in a workload.
type ImprovementSummary struct {
	ImprovementPlanURL *string   `json:"ImprovementPlanUrl,omitempty"`
	PillarID           *string   `json:"PillarId,omitempty"`
	QuestionID         *string   `json:"QuestionId,omitempty"`
	QuestionTitle      *string   `json:"QuestionTitle,omitempty"`
	Risk               *RiskEnum `json:"Risk,omitempty"`
}
