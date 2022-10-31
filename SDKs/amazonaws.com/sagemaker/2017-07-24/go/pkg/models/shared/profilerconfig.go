package shared



type ProfilerConfig struct {
    ProfilingIntervalInMilliseconds *int64 `json:"ProfilingIntervalInMilliseconds,omitempty"`
    ProfilingParameters map[string]string `json:"ProfilingParameters,omitempty"`
    S3OutputPath string `json:"S3OutputPath"`
    
}

