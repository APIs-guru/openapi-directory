package shared



type Metric struct {
    Benchmark *MetricBenchmark `json:"benchmark,omitempty"`
    Distributions []MetricDistribution `json:"distributions,omitempty"`
    MetricKey *string `json:"metricKey,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

