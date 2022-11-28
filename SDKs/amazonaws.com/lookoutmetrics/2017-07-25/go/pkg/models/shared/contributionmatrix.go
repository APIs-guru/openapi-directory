package shared

// ContributionMatrix
// Details about dimensions that contributed to an anomaly.
type ContributionMatrix struct {
	DimensionContributionList []DimensionContribution `json:"DimensionContributionList,omitempty"`
}
