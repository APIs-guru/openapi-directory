package shared



type AudioLogSetting struct {
    Destination AudioLogDestination `json:"destination"`
    Enabled bool `json:"enabled"`
    
}

