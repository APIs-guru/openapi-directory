package shared

// MonitoringConfigurationDescription
// Describes configuration parameters for CloudWatch logging for an application.
type MonitoringConfigurationDescription struct {
	ConfigurationType *ConfigurationTypeEnum `json:"ConfigurationType,omitempty"`
	LogLevel          *LogLevelEnum          `json:"LogLevel,omitempty"`
	MetricsLevel      *MetricsLevelEnum      `json:"MetricsLevel,omitempty"`
}
