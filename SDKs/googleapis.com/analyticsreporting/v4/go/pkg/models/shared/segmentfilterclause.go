package shared

// SegmentFilterClause
// Filter Clause to be used in a segment definition, can be wither a metric or a dimension filter.
type SegmentFilterClause struct {
	DimensionFilter *SegmentDimensionFilter `json:"dimensionFilter,omitempty"`
	MetricFilter    *SegmentMetricFilter    `json:"metricFilter,omitempty"`
	Not             *bool                   `json:"not,omitempty"`
}
