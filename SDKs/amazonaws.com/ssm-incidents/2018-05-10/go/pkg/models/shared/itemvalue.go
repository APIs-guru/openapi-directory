package shared

// ItemValue
// Describes a related item.
type ItemValue struct {
	Arn              *string `json:"arn,omitempty"`
	MetricDefinition *string `json:"metricDefinition,omitempty"`
	URL              *string `json:"url,omitempty"`
}
