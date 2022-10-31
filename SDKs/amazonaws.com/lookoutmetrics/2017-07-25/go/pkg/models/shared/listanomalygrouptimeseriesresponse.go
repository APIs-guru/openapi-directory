package shared



type ListAnomalyGroupTimeSeriesResponse struct {
    AnomalyGroupID *string `json:"AnomalyGroupId,omitempty"`
    MetricName *string `json:"MetricName,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    TimeSeriesList []TimeSeries `json:"TimeSeriesList,omitempty"`
    TimestampList []string `json:"TimestampList,omitempty"`
    
}

