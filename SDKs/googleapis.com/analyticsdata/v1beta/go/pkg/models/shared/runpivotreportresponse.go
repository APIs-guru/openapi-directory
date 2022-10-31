package shared

type RunPivotReportResponse struct {
	Aggregates       []Row             `json:"aggregates,omitempty"`
	DimensionHeaders []DimensionHeader `json:"dimensionHeaders,omitempty"`
	Kind             *string           `json:"kind,omitempty"`
	Metadata         *ResponseMetaData `json:"metadata,omitempty"`
	MetricHeaders    []MetricHeader    `json:"metricHeaders,omitempty"`
	PivotHeaders     []PivotHeader     `json:"pivotHeaders,omitempty"`
	PropertyQuota    *PropertyQuota    `json:"propertyQuota,omitempty"`
	Rows             []Row             `json:"rows,omitempty"`
}
