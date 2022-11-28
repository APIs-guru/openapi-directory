package shared

// CloudWatchLoggingOptionDescription
// Description of the CloudWatch logging option.
type CloudWatchLoggingOptionDescription struct {
	CloudWatchLoggingOptionID *string `json:"CloudWatchLoggingOptionId,omitempty"`
	LogStreamArn              string  `json:"LogStreamARN"`
	RoleArn                   string  `json:"RoleARN"`
}
