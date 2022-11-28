package shared

// CloudWatchLoggingOptionUpdate
// Describes CloudWatch logging option updates.
type CloudWatchLoggingOptionUpdate struct {
	CloudWatchLoggingOptionID string  `json:"CloudWatchLoggingOptionId"`
	LogStreamArnUpdate        *string `json:"LogStreamARNUpdate,omitempty"`
	RoleArnUpdate             *string `json:"RoleARNUpdate,omitempty"`
}
