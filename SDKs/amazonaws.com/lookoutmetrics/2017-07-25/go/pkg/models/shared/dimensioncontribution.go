package shared

// DimensionContribution
// Details about a dimension that contributed to an anomaly.
type DimensionContribution struct {
	DimensionName                  *string                      `json:"DimensionName,omitempty"`
	DimensionValueContributionList []DimensionValueContribution `json:"DimensionValueContributionList,omitempty"`
}
