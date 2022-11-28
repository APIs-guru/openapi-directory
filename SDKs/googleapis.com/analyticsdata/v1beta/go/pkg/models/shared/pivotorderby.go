package shared

// PivotOrderBy
// Sorts by a pivot column group.
type PivotOrderBy struct {
	MetricName      *string          `json:"metricName,omitempty"`
	PivotSelections []PivotSelection `json:"pivotSelections,omitempty"`
}
