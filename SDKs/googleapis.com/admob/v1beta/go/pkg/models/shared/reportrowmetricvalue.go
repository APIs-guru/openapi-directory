package shared



type ReportRowMetricValue struct {
    DoubleValue *float64 `json:"doubleValue,omitempty"`
    IntegerValue *string `json:"integerValue,omitempty"`
    MicrosValue *string `json:"microsValue,omitempty"`
    
}

