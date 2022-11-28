package shared

// ModuleLoggingConfigurationInput
// Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.
type ModuleLoggingConfigurationInput struct {
	Enabled  bool             `json:"Enabled"`
	LogLevel LoggingLevelEnum `json:"LogLevel"`
}
