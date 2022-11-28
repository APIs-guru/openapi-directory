package shared

// TextLogDestination
// Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
type TextLogDestination struct {
	CloudWatch CloudWatchLogGroupLogDestination `json:"cloudWatch"`
}
