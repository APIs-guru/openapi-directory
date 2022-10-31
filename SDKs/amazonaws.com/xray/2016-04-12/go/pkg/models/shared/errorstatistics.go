package shared



type ErrorStatistics struct {
    OtherCount *int64 `json:"OtherCount,omitempty"`
    ThrottleCount *int64 `json:"ThrottleCount,omitempty"`
    TotalCount *int64 `json:"TotalCount,omitempty"`
    
}

