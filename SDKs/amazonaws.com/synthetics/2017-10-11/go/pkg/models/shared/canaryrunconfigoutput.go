package shared



type CanaryRunConfigOutput struct {
    ActiveTracing *bool `json:"ActiveTracing,omitempty"`
    MemoryInMb *int64 `json:"MemoryInMB,omitempty"`
    TimeoutInSeconds *int64 `json:"TimeoutInSeconds,omitempty"`
    
}

