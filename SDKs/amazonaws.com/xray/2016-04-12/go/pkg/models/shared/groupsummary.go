package shared



type GroupSummary struct {
    FilterExpression *string `json:"FilterExpression,omitempty"`
    GroupArn *string `json:"GroupARN,omitempty"`
    GroupName *string `json:"GroupName,omitempty"`
    InsightsConfiguration *InsightsConfiguration `json:"InsightsConfiguration,omitempty"`
    
}

