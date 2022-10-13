package shared

type PivotHeaderEntry struct {
	DimensionNames  []string           `json:"dimensionNames"`
	DimensionValues []string           `json:"dimensionValues"`
	Metric          *MetricHeaderEntry `json:"metric"`
}
