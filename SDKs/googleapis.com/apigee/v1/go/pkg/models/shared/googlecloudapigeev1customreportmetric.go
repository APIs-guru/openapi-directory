package shared

// GoogleCloudApigeeV1CustomReportMetric
// This encapsulates a metric property of the form sum(message_count) where name is message_count and function is sum
type GoogleCloudApigeeV1CustomReportMetric struct {
	Function *string `json:"function,omitempty"`
	Name     *string `json:"name,omitempty"`
}
