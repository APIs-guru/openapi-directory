package shared

type CloudWatchLoggingOptionUpdate struct {
	CloudWatchLoggingOptionID string  `json:"CloudWatchLoggingOptionId"`
	LogStreamArnUpdate        *string `json:"LogStreamARNUpdate"`
	RoleArnUpdate             *string `json:"RoleARNUpdate"`
}
