package shared

type ItemValue struct {
	Arn              *string `json:"arn,omitempty"`
	MetricDefinition *string `json:"metricDefinition,omitempty"`
	URL              *string `json:"url,omitempty"`
}
