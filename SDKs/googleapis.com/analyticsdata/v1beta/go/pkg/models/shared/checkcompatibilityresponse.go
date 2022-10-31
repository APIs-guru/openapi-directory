package shared



type CheckCompatibilityResponse struct {
    DimensionCompatibilities []DimensionCompatibility `json:"dimensionCompatibilities,omitempty"`
    MetricCompatibilities []MetricCompatibility `json:"metricCompatibilities,omitempty"`
    
}

