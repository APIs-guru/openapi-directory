package shared

// CloudWatchLogsConfiguration
// Describes the Amazon CloudWatch logs configuration for a layer.
type CloudWatchLogsConfiguration struct {
	Enabled    *bool                     `json:"Enabled,omitempty"`
	LogStreams []CloudWatchLogsLogStream `json:"LogStreams,omitempty"`
}
