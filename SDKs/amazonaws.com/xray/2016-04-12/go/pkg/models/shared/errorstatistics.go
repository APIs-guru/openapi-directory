package shared

type ErrorStatistics struct {
	OtherCount    *int64 `json:"OtherCount"`
	ThrottleCount *int64 `json:"ThrottleCount"`
	TotalCount    *int64 `json:"TotalCount"`
}
