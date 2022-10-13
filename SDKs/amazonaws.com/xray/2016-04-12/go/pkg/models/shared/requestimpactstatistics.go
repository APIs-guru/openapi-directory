package shared

type RequestImpactStatistics struct {
	FaultCount *int64 `json:"FaultCount"`
	OkCount    *int64 `json:"OkCount"`
	TotalCount *int64 `json:"TotalCount"`
}
