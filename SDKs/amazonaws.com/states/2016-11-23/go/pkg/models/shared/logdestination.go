package shared

type LogDestination struct {
	CloudWatchLogsLogGroup *CloudWatchLogsLogGroup `json:"cloudWatchLogsLogGroup"`
}
