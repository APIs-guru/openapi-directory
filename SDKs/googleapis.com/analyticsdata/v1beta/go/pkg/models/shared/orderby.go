package shared

type OrderBy struct {
	Desc      *bool             `json:"desc,omitempty"`
	Dimension *DimensionOrderBy `json:"dimension,omitempty"`
	Metric    *MetricOrderBy    `json:"metric,omitempty"`
	Pivot     *PivotOrderBy     `json:"pivot,omitempty"`
}
