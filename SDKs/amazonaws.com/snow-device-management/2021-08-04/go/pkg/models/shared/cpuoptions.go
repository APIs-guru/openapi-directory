package shared



type CPUOptions struct {
    CoreCount *int64 `json:"coreCount,omitempty"`
    ThreadsPerCore *int64 `json:"threadsPerCore,omitempty"`
    
}

