package shared

type MetricKeyDataPoints struct {
	DataPoints []DataPoint                `json:"DataPoints,omitempty"`
	Key        *ResponseResourceMetricKey `json:"Key,omitempty"`
}
