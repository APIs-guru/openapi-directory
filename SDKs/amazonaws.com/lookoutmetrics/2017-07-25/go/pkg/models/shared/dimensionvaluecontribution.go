package shared

type DimensionValueContribution struct {
	ContributionScore *float64 `json:"ContributionScore,omitempty"`
	DimensionValue    *string  `json:"DimensionValue,omitempty"`
}
