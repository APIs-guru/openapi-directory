package shared

type PillarReviewSummary struct {
	Notes      *string          `json:"Notes"`
	PillarID   *string          `json:"PillarId"`
	PillarName *string          `json:"PillarName"`
	RiskCounts map[string]int64 `json:"RiskCounts"`
}
