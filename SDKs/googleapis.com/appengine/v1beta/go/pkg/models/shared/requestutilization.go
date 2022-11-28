package shared

// RequestUtilization
// Target scaling by request utilization. Only applicable in the App Engine flexible environment.
type RequestUtilization struct {
	TargetConcurrentRequests    *int32 `json:"targetConcurrentRequests,omitempty"`
	TargetRequestCountPerSecond *int32 `json:"targetRequestCountPerSecond,omitempty"`
}
