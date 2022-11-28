package shared

// GroupSummary
// Details for a group without metadata.
type GroupSummary struct {
	FilterExpression      *string                `json:"FilterExpression,omitempty"`
	GroupArn              *string                `json:"GroupARN,omitempty"`
	GroupName             *string                `json:"GroupName,omitempty"`
	InsightsConfiguration *InsightsConfiguration `json:"InsightsConfiguration,omitempty"`
}
