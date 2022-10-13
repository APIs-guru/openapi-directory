package shared

type ReportMetadata struct {
	DimensionMetadata              []DimensionMetadata `json:"dimensionMetadata"`
	MaxNumberOfDimensionsToRequest *int32              `json:"maxNumberOfDimensionsToRequest"`
	MaxNumberOfMetricsToRequest    *int32              `json:"maxNumberOfMetricsToRequest"`
	MetricMetadata                 []MetricMetadata    `json:"metricMetadata"`
	ReportType                     *string             `json:"reportType"`
}
