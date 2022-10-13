package shared

type OrderBy struct {
	Desc      *bool             `json:"desc"`
	Dimension *DimensionOrderBy `json:"dimension"`
	Metric    *MetricOrderBy    `json:"metric"`
	Pivot     *PivotOrderBy     `json:"pivot"`
}
