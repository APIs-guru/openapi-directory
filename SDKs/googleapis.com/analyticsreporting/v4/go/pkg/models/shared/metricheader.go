package shared



type MetricHeader struct {
    MetricHeaderEntries []MetricHeaderEntry `json:"metricHeaderEntries,omitempty"`
    PivotHeaders []PivotHeader `json:"pivotHeaders,omitempty"`
    
}

