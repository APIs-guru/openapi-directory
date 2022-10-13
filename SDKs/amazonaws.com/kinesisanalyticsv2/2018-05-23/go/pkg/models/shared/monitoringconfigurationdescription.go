package shared

type MonitoringConfigurationDescription struct {
	ConfigurationType *ConfigurationTypeEnum `json:"ConfigurationType"`
	LogLevel          *LogLevelEnum          `json:"LogLevel"`
	MetricsLevel      *MetricsLevelEnum      `json:"MetricsLevel"`
}
