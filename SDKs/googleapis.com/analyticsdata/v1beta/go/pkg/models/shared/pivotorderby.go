package shared

type PivotOrderBy struct {
	MetricName      *string          `json:"metricName,omitempty"`
	PivotSelections []PivotSelection `json:"pivotSelections,omitempty"`
}
