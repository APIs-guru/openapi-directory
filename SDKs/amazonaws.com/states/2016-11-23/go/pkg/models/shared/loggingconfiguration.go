package shared



type LoggingConfiguration struct {
    Destinations []LogDestination `json:"destinations,omitempty"`
    IncludeExecutionData *bool `json:"includeExecutionData,omitempty"`
    Level *LogLevelEnum `json:"level,omitempty"`
    
}

