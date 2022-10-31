package shared

type DimensionContribution struct {
	DimensionName                  *string                      `json:"DimensionName,omitempty"`
	DimensionValueContributionList []DimensionValueContribution `json:"DimensionValueContributionList,omitempty"`
}
