package shared

type RunReportResponse struct {
	DimensionHeaders []DimensionHeader `json:"dimensionHeaders,omitempty"`
	Kind             *string           `json:"kind,omitempty"`
	Maximums         []Row             `json:"maximums,omitempty"`
	Metadata         *ResponseMetaData `json:"metadata,omitempty"`
	MetricHeaders    []MetricHeader    `json:"metricHeaders,omitempty"`
	Minimums         []Row             `json:"minimums,omitempty"`
	PropertyQuota    *PropertyQuota    `json:"propertyQuota,omitempty"`
	RowCount         *int32            `json:"rowCount,omitempty"`
	Rows             []Row             `json:"rows,omitempty"`
	Totals           []Row             `json:"totals,omitempty"`
}
