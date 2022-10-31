package shared



type MetricQuery struct {
    Filter map[string]string `json:"Filter,omitempty"`
    GroupBy *DimensionGroup `json:"GroupBy,omitempty"`
    Metric string `json:"Metric"`
    
}

