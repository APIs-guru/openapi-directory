package shared



type ModuleLoggingConfigurationInput struct {
    Enabled bool `json:"Enabled"`
    LogLevel LoggingLevelEnum `json:"LogLevel"`
    
}

