package shared



type ListLoggingConfigurationsResponse struct {
    LoggingConfigurations []LoggingConfiguration `json:"LoggingConfigurations,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    
}

