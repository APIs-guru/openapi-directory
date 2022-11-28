package shared

// DimensionValueContribution
// The severity of a value of a dimension that contributed to an anomaly.
type DimensionValueContribution struct {
	ContributionScore *float64 `json:"ContributionScore,omitempty"`
	DimensionValue    *string  `json:"DimensionValue,omitempty"`
}
