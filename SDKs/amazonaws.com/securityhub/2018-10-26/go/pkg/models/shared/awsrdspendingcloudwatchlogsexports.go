package shared

// AwsRdsPendingCloudWatchLogsExports
// Identifies the log types to enable and disable.
type AwsRdsPendingCloudWatchLogsExports struct {
	LogTypesToDisable []string `json:"LogTypesToDisable,omitempty"`
	LogTypesToEnable  []string `json:"LogTypesToEnable,omitempty"`
}
