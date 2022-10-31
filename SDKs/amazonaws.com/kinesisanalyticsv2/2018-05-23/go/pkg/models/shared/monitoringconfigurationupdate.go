package shared



type MonitoringConfigurationUpdate struct {
    ConfigurationTypeUpdate *ConfigurationTypeEnum `json:"ConfigurationTypeUpdate,omitempty"`
    LogLevelUpdate *LogLevelEnum `json:"LogLevelUpdate,omitempty"`
    MetricsLevelUpdate *MetricsLevelEnum `json:"MetricsLevelUpdate,omitempty"`
    
}

