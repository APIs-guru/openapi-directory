package shared

// CloudWatchDestination
// An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
type CloudWatchDestination struct {
	DimensionConfigurations []CloudWatchDimensionConfiguration `json:"DimensionConfigurations"`
}
