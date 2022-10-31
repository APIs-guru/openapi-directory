package shared



type TestMetricFilterRequest struct {
    FilterPattern string `json:"filterPattern"`
    LogEventMessages []string `json:"logEventMessages"`
    
}

