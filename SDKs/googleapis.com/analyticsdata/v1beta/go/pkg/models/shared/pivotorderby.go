package shared

type PivotOrderBy struct {
	MetricName      *string          `json:"metricName"`
	PivotSelections []PivotSelection `json:"pivotSelections"`
}
