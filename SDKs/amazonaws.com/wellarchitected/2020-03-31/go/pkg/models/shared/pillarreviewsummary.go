package shared

// PillarReviewSummary
// A pillar review summary of a lens review.
type PillarReviewSummary struct {
	Notes      *string          `json:"Notes,omitempty"`
	PillarID   *string          `json:"PillarId,omitempty"`
	PillarName *string          `json:"PillarName,omitempty"`
	RiskCounts map[string]int64 `json:"RiskCounts,omitempty"`
}
