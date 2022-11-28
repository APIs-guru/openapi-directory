package shared

// DimensionalityReductionMetrics
// Model evaluation metrics for dimensionality reduction models.
type DimensionalityReductionMetrics struct {
	TotalExplainedVarianceRatio *float64 `json:"totalExplainedVarianceRatio,omitempty"`
}
