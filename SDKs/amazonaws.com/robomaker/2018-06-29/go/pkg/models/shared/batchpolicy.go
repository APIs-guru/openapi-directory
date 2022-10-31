package shared



type BatchPolicy struct {
    MaxConcurrency *int64 `json:"maxConcurrency,omitempty"`
    TimeoutInSeconds *int64 `json:"timeoutInSeconds,omitempty"`
    
}

