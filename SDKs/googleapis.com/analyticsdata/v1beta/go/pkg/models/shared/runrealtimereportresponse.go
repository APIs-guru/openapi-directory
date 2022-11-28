package shared

// RunRealtimeReportResponse
// The response realtime report table corresponding to a request.
type RunRealtimeReportResponse struct {
	DimensionHeaders []DimensionHeader `json:"dimensionHeaders,omitempty"`
	Kind             *string           `json:"kind,omitempty"`
	Maximums         []Row             `json:"maximums,omitempty"`
	MetricHeaders    []MetricHeader    `json:"metricHeaders,omitempty"`
	Minimums         []Row             `json:"minimums,omitempty"`
	PropertyQuota    *PropertyQuota    `json:"propertyQuota,omitempty"`
	RowCount         *int32            `json:"rowCount,omitempty"`
	Rows             []Row             `json:"rows,omitempty"`
	Totals           []Row             `json:"totals,omitempty"`
}
