package shared

// CloudWatchLoggingOptionDescription
// Describes the Amazon CloudWatch logging option.
type CloudWatchLoggingOptionDescription struct {
	CloudWatchLoggingOptionID *string `json:"CloudWatchLoggingOptionId,omitempty"`
	LogStreamArn              string  `json:"LogStreamARN"`
	RoleArn                   *string `json:"RoleARN,omitempty"`
}
