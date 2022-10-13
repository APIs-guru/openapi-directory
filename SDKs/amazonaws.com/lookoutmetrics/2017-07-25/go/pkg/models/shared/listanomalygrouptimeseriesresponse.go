package shared

type ListAnomalyGroupTimeSeriesResponse struct {
	AnomalyGroupID *string      `json:"AnomalyGroupId"`
	MetricName     *string      `json:"MetricName"`
	NextToken      *string      `json:"NextToken"`
	TimeSeriesList []TimeSeries `json:"TimeSeriesList"`
	TimestampList  []string     `json:"TimestampList"`
}
