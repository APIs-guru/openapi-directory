package shared



type ResponseResourceMetricKey struct {
    Dimensions map[string]string `json:"Dimensions,omitempty"`
    Metric string `json:"Metric"`
    
}

