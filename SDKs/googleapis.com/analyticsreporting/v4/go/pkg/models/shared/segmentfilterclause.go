package shared

type SegmentFilterClause struct {
	DimensionFilter *SegmentDimensionFilter `json:"dimensionFilter,omitempty"`
	MetricFilter    *SegmentMetricFilter    `json:"metricFilter,omitempty"`
	Not             *bool                   `json:"not,omitempty"`
}
