package shared

type MonitoringConfigurationUpdate struct {
	ConfigurationTypeUpdate *ConfigurationTypeEnum `json:"ConfigurationTypeUpdate"`
	LogLevelUpdate          *LogLevelEnum          `json:"LogLevelUpdate"`
	MetricsLevelUpdate      *MetricsLevelEnum      `json:"MetricsLevelUpdate"`
}
