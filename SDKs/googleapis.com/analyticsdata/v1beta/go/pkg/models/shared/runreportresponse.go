package shared

type RunReportResponse struct {
	DimensionHeaders []DimensionHeader `json:"dimensionHeaders"`
	Kind             *string           `json:"kind"`
	Maximums         []Row             `json:"maximums"`
	Metadata         *ResponseMetaData `json:"metadata"`
	MetricHeaders    []MetricHeader    `json:"metricHeaders"`
	Minimums         []Row             `json:"minimums"`
	PropertyQuota    *PropertyQuota    `json:"propertyQuota"`
	RowCount         *int32            `json:"rowCount"`
	Rows             []Row             `json:"rows"`
	Totals           []Row             `json:"totals"`
}
