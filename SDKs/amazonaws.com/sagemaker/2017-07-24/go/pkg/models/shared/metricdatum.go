package shared



type MetricDatum struct {
    MetricName *AutoMlMetricEnumEnum `json:"MetricName,omitempty"`
    Set *MetricSetSourceEnum `json:"Set,omitempty"`
    Value *float32 `json:"Value,omitempty"`
    
}

