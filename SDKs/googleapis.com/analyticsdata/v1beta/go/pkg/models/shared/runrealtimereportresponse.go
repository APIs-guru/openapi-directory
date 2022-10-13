package shared

type RunRealtimeReportResponse struct {
	DimensionHeaders []DimensionHeader `json:"dimensionHeaders"`
	Kind             *string           `json:"kind"`
	Maximums         []Row             `json:"maximums"`
	MetricHeaders    []MetricHeader    `json:"metricHeaders"`
	Minimums         []Row             `json:"minimums"`
	PropertyQuota    *PropertyQuota    `json:"propertyQuota"`
	RowCount         *int32            `json:"rowCount"`
	Rows             []Row             `json:"rows"`
	Totals           []Row             `json:"totals"`
}
