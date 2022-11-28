package shared

// ColumnHeader
// Column headers.
type ColumnHeader struct {
	Dimensions   []string      `json:"dimensions,omitempty"`
	MetricHeader *MetricHeader `json:"metricHeader,omitempty"`
}
