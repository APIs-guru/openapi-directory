package shared

// FaultStatistics
// Information about requests that failed with a 5xx Server Error status code.
type FaultStatistics struct {
	OtherCount *int64 `json:"OtherCount,omitempty"`
	TotalCount *int64 `json:"TotalCount,omitempty"`
}
