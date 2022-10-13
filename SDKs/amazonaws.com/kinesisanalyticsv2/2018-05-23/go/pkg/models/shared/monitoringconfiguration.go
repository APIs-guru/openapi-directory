package shared

type MonitoringConfiguration struct {
	ConfigurationType ConfigurationTypeEnum `json:"ConfigurationType"`
	LogLevel          *LogLevelEnum         `json:"LogLevel"`
	MetricsLevel      *MetricsLevelEnum     `json:"MetricsLevel"`
}
