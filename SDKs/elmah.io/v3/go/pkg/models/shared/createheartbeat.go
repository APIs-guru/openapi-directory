package shared



type CreateHeartbeat struct {
    Application *string `json:"application,omitempty"`
    Reason *string `json:"reason,omitempty"`
    Result *string `json:"result,omitempty"`
    Took *int64 `json:"took,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

