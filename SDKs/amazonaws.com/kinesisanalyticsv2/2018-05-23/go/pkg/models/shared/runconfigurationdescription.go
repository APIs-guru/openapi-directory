package shared



type RunConfigurationDescription struct {
    ApplicationRestoreConfigurationDescription *ApplicationRestoreConfiguration `json:"ApplicationRestoreConfigurationDescription,omitempty"`
    FlinkRunConfigurationDescription *FlinkRunConfiguration `json:"FlinkRunConfigurationDescription,omitempty"`
    
}

