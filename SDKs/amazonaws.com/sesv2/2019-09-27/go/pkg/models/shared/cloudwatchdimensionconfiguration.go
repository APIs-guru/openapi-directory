package shared

// CloudWatchDimensionConfiguration
// An object that defines the dimension configuration to use when you send email events to Amazon CloudWatch.
type CloudWatchDimensionConfiguration struct {
	DefaultDimensionValue string                   `json:"DefaultDimensionValue"`
	DimensionName         string                   `json:"DimensionName"`
	DimensionValueSource  DimensionValueSourceEnum `json:"DimensionValueSource"`
}
