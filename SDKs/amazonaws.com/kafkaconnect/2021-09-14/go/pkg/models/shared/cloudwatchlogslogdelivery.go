package shared

// CloudWatchLogsLogDelivery
// The settings for delivering connector logs to Amazon CloudWatch Logs.
type CloudWatchLogsLogDelivery struct {
	Enabled  bool    `json:"enabled"`
	LogGroup *string `json:"logGroup,omitempty"`
}
