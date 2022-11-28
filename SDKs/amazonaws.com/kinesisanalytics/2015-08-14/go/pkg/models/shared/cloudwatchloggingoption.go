package shared

// CloudWatchLoggingOption
// Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN.
type CloudWatchLoggingOption struct {
	LogStreamArn string `json:"LogStreamARN"`
	RoleArn      string `json:"RoleARN"`
}
