package shared



type EdgeStatistics struct {
    ErrorStatistics *ErrorStatistics `json:"ErrorStatistics,omitempty"`
    FaultStatistics *FaultStatistics `json:"FaultStatistics,omitempty"`
    OkCount *int64 `json:"OkCount,omitempty"`
    TotalCount *int64 `json:"TotalCount,omitempty"`
    TotalResponseTime *float64 `json:"TotalResponseTime,omitempty"`
    
}

