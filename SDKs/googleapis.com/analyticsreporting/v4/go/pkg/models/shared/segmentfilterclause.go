package shared

type SegmentFilterClause struct {
	DimensionFilter *SegmentDimensionFilter `json:"dimensionFilter"`
	MetricFilter    *SegmentMetricFilter    `json:"metricFilter"`
	Not             *bool                   `json:"not"`
}
