package shared

// ZeppelinMonitoringConfigurationUpdate
// Updates to the monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.
type ZeppelinMonitoringConfigurationUpdate struct {
	LogLevelUpdate LogLevelEnum `json:"LogLevelUpdate"`
}
