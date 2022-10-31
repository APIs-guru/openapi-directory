package shared

type TimeSeries struct {
	DimensionList   []DimensionNameValue `json:"DimensionList"`
	MetricValueList []float64            `json:"MetricValueList"`
	TimeSeriesID    string               `json:"TimeSeriesId"`
}
