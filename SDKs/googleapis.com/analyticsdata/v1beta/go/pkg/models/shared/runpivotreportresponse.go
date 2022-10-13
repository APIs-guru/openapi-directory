package shared

type RunPivotReportResponse struct {
	Aggregates       []Row             `json:"aggregates"`
	DimensionHeaders []DimensionHeader `json:"dimensionHeaders"`
	Kind             *string           `json:"kind"`
	Metadata         *ResponseMetaData `json:"metadata"`
	MetricHeaders    []MetricHeader    `json:"metricHeaders"`
	PivotHeaders     []PivotHeader     `json:"pivotHeaders"`
	PropertyQuota    *PropertyQuota    `json:"propertyQuota"`
	Rows             []Row             `json:"rows"`
}
