package shared

type HpoObjective struct {
	MetricName  *string `json:"metricName"`
	MetricRegex *string `json:"metricRegex"`
	Type        *string `json:"type"`
}
