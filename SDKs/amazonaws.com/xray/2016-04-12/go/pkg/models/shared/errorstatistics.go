package shared

// ErrorStatistics
// Information about requests that failed with a 4xx Client Error status code.
type ErrorStatistics struct {
	OtherCount    *int64 `json:"OtherCount,omitempty"`
	ThrottleCount *int64 `json:"ThrottleCount,omitempty"`
	TotalCount    *int64 `json:"TotalCount,omitempty"`
}
