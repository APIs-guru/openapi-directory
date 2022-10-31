package shared



type Session struct {
    Duration *int64 `json:"duration,omitempty"`
    ID *string `json:"id,omitempty"`
    StartTimestamp *string `json:"startTimestamp,omitempty"`
    StopTimestamp *string `json:"stopTimestamp,omitempty"`
    
}

