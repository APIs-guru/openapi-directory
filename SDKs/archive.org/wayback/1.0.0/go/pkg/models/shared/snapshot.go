package shared



type Snapshot struct {
    Status *int64 `json:"status,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

