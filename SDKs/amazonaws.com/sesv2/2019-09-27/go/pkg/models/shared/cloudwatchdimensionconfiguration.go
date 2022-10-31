package shared

type CloudWatchDimensionConfiguration struct {
	DefaultDimensionValue string                   `json:"DefaultDimensionValue"`
	DimensionName         string                   `json:"DimensionName"`
	DimensionValueSource  DimensionValueSourceEnum `json:"DimensionValueSource"`
}
