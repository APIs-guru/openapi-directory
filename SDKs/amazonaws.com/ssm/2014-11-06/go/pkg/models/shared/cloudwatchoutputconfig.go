package shared

// CloudWatchOutputConfig
// Configuration options for sending command output to Amazon CloudWatch Logs.
type CloudWatchOutputConfig struct {
	CloudWatchLogGroupName  *string `json:"CloudWatchLogGroupName,omitempty"`
	CloudWatchOutputEnabled *bool   `json:"CloudWatchOutputEnabled,omitempty"`
}
