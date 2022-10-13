package shared

type RequestUtilization struct {
	TargetConcurrentRequests    *int32 `json:"targetConcurrentRequests"`
	TargetRequestCountPerSecond *int32 `json:"targetRequestCountPerSecond"`
}
