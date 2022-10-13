package shared

type ColumnHeader struct {
	Dimensions   []string      `json:"dimensions"`
	MetricHeader *MetricHeader `json:"metricHeader"`
}
