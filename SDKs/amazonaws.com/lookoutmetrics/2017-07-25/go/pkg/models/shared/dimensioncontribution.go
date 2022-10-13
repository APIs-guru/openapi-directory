package shared

type DimensionContribution struct {
	DimensionName                  *string                      `json:"DimensionName"`
	DimensionValueContributionList []DimensionValueContribution `json:"DimensionValueContributionList"`
}
