package shared

type Group struct {
	FilterExpression      *string                `json:"FilterExpression"`
	GroupArn              *string                `json:"GroupARN"`
	GroupName             *string                `json:"GroupName"`
	InsightsConfiguration *InsightsConfiguration `json:"InsightsConfiguration"`
}
