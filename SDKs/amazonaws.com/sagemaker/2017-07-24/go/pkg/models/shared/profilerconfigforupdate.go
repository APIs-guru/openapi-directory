package shared

// ProfilerConfigForUpdate
// Configuration information for updating the Debugger profile parameters, system and framework metrics configurations, and storage paths.
type ProfilerConfigForUpdate struct {
	DisableProfiler                 *bool             `json:"DisableProfiler,omitempty"`
	ProfilingIntervalInMilliseconds *int64            `json:"ProfilingIntervalInMilliseconds,omitempty"`
	ProfilingParameters             map[string]string `json:"ProfilingParameters,omitempty"`
	S3OutputPath                    *string           `json:"S3OutputPath,omitempty"`
}
