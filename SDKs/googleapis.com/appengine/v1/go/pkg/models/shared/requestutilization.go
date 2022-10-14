package shared

type RequestUtilization struct {
	TargetConcurrentRequests    *int32 `json:"targetConcurrentRequests,omitempty"`
	TargetRequestCountPerSecond *int32 `json:"targetRequestCountPerSecond,omitempty"`
}
