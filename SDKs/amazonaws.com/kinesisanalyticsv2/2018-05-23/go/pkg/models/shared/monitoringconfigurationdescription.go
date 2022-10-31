package shared



type MonitoringConfigurationDescription struct {
    ConfigurationType *ConfigurationTypeEnum `json:"ConfigurationType,omitempty"`
    LogLevel *LogLevelEnum `json:"LogLevel,omitempty"`
    MetricsLevel *MetricsLevelEnum `json:"MetricsLevel,omitempty"`
    
}

