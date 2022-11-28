package shared

// OrderBy
// Order bys define how rows will be sorted in the response. For example, ordering rows by descending event count is one ordering, and ordering rows by the event name string is a different ordering.
type OrderBy struct {
	Desc      *bool             `json:"desc,omitempty"`
	Dimension *DimensionOrderBy `json:"dimension,omitempty"`
	Metric    *MetricOrderBy    `json:"metric,omitempty"`
	Pivot     *PivotOrderBy     `json:"pivot,omitempty"`
}
