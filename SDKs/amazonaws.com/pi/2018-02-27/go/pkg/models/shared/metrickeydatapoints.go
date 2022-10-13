package shared

type MetricKeyDataPoints struct {
	DataPoints []DataPoint                `json:"DataPoints"`
	Key        *ResponseResourceMetricKey `json:"Key"`
}
