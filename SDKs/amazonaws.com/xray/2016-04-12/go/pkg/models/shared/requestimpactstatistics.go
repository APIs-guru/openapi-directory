package shared

// RequestImpactStatistics
// Statistics that describe how the incident has impacted a service.
type RequestImpactStatistics struct {
	FaultCount *int64 `json:"FaultCount,omitempty"`
	OkCount    *int64 `json:"OkCount,omitempty"`
	TotalCount *int64 `json:"TotalCount,omitempty"`
}
