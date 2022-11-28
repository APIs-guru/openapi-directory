package shared

// TimeSeries
// Details about a metric. A metric is an aggregation of the values of a measure for a dimension value, such as <i>availability</i> in the <i>us-east-1</i> Region.
type TimeSeries struct {
	DimensionList   []DimensionNameValue `json:"DimensionList"`
	MetricValueList []float64            `json:"MetricValueList"`
	TimeSeriesID    string               `json:"TimeSeriesId"`
}
