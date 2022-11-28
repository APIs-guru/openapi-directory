package shared

// ForecastStatistics
// The predicted high and low fault count. This is used to determine if a service has become anomalous and if an insight should be created.
type ForecastStatistics struct {
	FaultCountHigh *int64 `json:"FaultCountHigh,omitempty"`
	FaultCountLow  *int64 `json:"FaultCountLow,omitempty"`
}
