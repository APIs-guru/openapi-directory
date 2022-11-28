package shared

// GoogleCloudApigeeV1QueryMetric
// More info about Metric: https://docs.apigee.com/api-platform/analytics/analytics-reference#metrics
type GoogleCloudApigeeV1QueryMetric struct {
	Alias    *string `json:"alias,omitempty"`
	Function *string `json:"function,omitempty"`
	Name     *string `json:"name,omitempty"`
	Operator *string `json:"operator,omitempty"`
	Value    *string `json:"value,omitempty"`
}
