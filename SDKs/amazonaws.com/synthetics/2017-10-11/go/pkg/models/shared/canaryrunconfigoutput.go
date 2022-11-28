package shared

// CanaryRunConfigOutput
// A structure that contains information about a canary run.
type CanaryRunConfigOutput struct {
	ActiveTracing    *bool  `json:"ActiveTracing,omitempty"`
	MemoryInMb       *int64 `json:"MemoryInMB,omitempty"`
	TimeoutInSeconds *int64 `json:"TimeoutInSeconds,omitempty"`
}
