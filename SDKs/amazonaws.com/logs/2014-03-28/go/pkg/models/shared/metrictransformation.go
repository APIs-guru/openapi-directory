package shared

type MetricTransformation struct {
	DefaultValue    *float64          `json:"defaultValue,omitempty"`
	Dimensions      map[string]string `json:"dimensions,omitempty"`
	MetricName      string            `json:"metricName"`
	MetricNamespace string            `json:"metricNamespace"`
	MetricValue     string            `json:"metricValue"`
	Unit            *StandardUnitEnum `json:"unit,omitempty"`
}
