package shared

type TextLogDestination struct {
	CloudWatch CloudWatchLogGroupLogDestination `json:"cloudWatch"`
}
