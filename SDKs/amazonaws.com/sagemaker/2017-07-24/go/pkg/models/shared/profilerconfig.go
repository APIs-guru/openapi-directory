package shared

// ProfilerConfig
// Configuration information for Debugger system monitoring, framework profiling, and storage paths.
type ProfilerConfig struct {
	ProfilingIntervalInMilliseconds *int64            `json:"ProfilingIntervalInMilliseconds,omitempty"`
	ProfilingParameters             map[string]string `json:"ProfilingParameters,omitempty"`
	S3OutputPath                    string            `json:"S3OutputPath"`
}
