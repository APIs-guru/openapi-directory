package shared



type CloudWatchLogsConfiguration struct {
    Enabled *bool `json:"Enabled,omitempty"`
    LogStreams []CloudWatchLogsLogStream `json:"LogStreams,omitempty"`
    
}

