package shared

type ReportMetadata struct {
	DimensionMetadata              []DimensionMetadata `json:"dimensionMetadata,omitempty"`
	MaxNumberOfDimensionsToRequest *int32              `json:"maxNumberOfDimensionsToRequest,omitempty"`
	MaxNumberOfMetricsToRequest    *int32              `json:"maxNumberOfMetricsToRequest,omitempty"`
	MetricMetadata                 []MetricMetadata    `json:"metricMetadata,omitempty"`
	ReportType                     *string             `json:"reportType,omitempty"`
}
