package shared

type MetricHeader struct {
	MetricHeaderEntries []MetricHeaderEntry `json:"metricHeaderEntries"`
	PivotHeaders        []PivotHeader       `json:"pivotHeaders"`
}
