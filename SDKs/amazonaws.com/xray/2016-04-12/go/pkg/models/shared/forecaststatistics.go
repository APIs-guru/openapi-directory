package shared

type ForecastStatistics struct {
	FaultCountHigh *int64 `json:"FaultCountHigh"`
	FaultCountLow  *int64 `json:"FaultCountLow"`
}
