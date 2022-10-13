package shared

type GroupSummary struct {
	FilterExpression      *string                `json:"FilterExpression"`
	GroupArn              *string                `json:"GroupARN"`
	GroupName             *string                `json:"GroupName"`
	InsightsConfiguration *InsightsConfiguration `json:"InsightsConfiguration"`
}
