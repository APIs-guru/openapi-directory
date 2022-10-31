package shared

type MonitoringConfiguration struct {
	ConfigurationType ConfigurationTypeEnum `json:"ConfigurationType"`
	LogLevel          *LogLevelEnum         `json:"LogLevel,omitempty"`
	MetricsLevel      *MetricsLevelEnum     `json:"MetricsLevel,omitempty"`
}
