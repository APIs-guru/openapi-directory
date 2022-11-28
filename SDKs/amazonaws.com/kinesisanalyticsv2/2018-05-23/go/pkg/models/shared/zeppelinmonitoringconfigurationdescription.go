package shared

// ZeppelinMonitoringConfigurationDescription
// The monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.
type ZeppelinMonitoringConfigurationDescription struct {
	LogLevel *LogLevelEnum `json:"LogLevel,omitempty"`
}
