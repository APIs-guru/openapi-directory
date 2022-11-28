package shared

// LogDestination
// <p/>
type LogDestination struct {
	CloudWatchLogsLogGroup *CloudWatchLogsLogGroup `json:"cloudWatchLogsLogGroup,omitempty"`
}
