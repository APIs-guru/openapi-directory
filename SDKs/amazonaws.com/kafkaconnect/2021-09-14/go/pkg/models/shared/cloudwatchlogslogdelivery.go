package shared



type CloudWatchLogsLogDelivery struct {
    Enabled bool `json:"enabled"`
    LogGroup *string `json:"logGroup,omitempty"`
    
}

