package shared



type RunConfigurationUpdate struct {
    ApplicationRestoreConfiguration *ApplicationRestoreConfiguration `json:"ApplicationRestoreConfiguration,omitempty"`
    FlinkRunConfiguration *FlinkRunConfiguration `json:"FlinkRunConfiguration,omitempty"`
    
}

