package shared

// MonitoringConfigurationUpdate
// Describes updates to configuration parameters for Amazon CloudWatch logging for an application.
type MonitoringConfigurationUpdate struct {
	ConfigurationTypeUpdate *ConfigurationTypeEnum `json:"ConfigurationTypeUpdate,omitempty"`
	LogLevelUpdate          *LogLevelEnum          `json:"LogLevelUpdate,omitempty"`
	MetricsLevelUpdate      *MetricsLevelEnum      `json:"MetricsLevelUpdate,omitempty"`
}
