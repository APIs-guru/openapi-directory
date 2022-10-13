package shared

type ServiceStatistics struct {
	ErrorStatistics   *ErrorStatistics `json:"ErrorStatistics"`
	FaultStatistics   *FaultStatistics `json:"FaultStatistics"`
	OkCount           *int64           `json:"OkCount"`
	TotalCount        *int64           `json:"TotalCount"`
	TotalResponseTime *float64         `json:"TotalResponseTime"`
}
