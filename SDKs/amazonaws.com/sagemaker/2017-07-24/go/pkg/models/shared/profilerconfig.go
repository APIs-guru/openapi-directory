package shared

type ProfilerConfig struct {
	ProfilingIntervalInMilliseconds *int64            `json:"ProfilingIntervalInMilliseconds"`
	ProfilingParameters             map[string]string `json:"ProfilingParameters"`
	S3OutputPath                    string            `json:"S3OutputPath"`
}
