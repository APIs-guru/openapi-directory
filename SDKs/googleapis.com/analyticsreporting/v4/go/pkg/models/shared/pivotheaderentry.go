package shared



type PivotHeaderEntry struct {
    DimensionNames []string `json:"dimensionNames,omitempty"`
    DimensionValues []string `json:"dimensionValues,omitempty"`
    Metric *MetricHeaderEntry `json:"metric,omitempty"`
    
}

