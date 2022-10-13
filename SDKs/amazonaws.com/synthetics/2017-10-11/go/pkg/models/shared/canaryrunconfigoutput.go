package shared

type CanaryRunConfigOutput struct {
	ActiveTracing    *bool  `json:"ActiveTracing"`
	MemoryInMb       *int64 `json:"MemoryInMB"`
	TimeoutInSeconds *int64 `json:"TimeoutInSeconds"`
}
