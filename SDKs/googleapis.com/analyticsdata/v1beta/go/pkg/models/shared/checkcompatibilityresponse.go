package shared

// CheckCompatibilityResponse
// The compatibility response with the compatibility of each dimension & metric.
type CheckCompatibilityResponse struct {
	DimensionCompatibilities []DimensionCompatibility `json:"dimensionCompatibilities,omitempty"`
	MetricCompatibilities    []MetricCompatibility    `json:"metricCompatibilities,omitempty"`
}
