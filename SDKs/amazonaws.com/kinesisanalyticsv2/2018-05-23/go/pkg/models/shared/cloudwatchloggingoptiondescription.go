package shared

type CloudWatchLoggingOptionDescription struct {
	CloudWatchLoggingOptionID *string `json:"CloudWatchLoggingOptionId"`
	LogStreamArn              string  `json:"LogStreamARN"`
	RoleArn                   *string `json:"RoleARN"`
}
