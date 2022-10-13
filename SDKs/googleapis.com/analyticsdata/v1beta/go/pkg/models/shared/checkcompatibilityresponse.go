package shared

type CheckCompatibilityResponse struct {
	DimensionCompatibilities []DimensionCompatibility `json:"dimensionCompatibilities"`
	MetricCompatibilities    []MetricCompatibility    `json:"metricCompatibilities"`
}
