package shared

// ModuleLoggingConfiguration
// Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.
type ModuleLoggingConfiguration struct {
	CloudWatchLogGroupArn *string           `json:"CloudWatchLogGroupArn,omitempty"`
	Enabled               *bool             `json:"Enabled,omitempty"`
	LogLevel              *LoggingLevelEnum `json:"LogLevel,omitempty"`
}
