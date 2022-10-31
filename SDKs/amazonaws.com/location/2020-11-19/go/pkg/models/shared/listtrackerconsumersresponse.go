package shared



type ListTrackerConsumersResponse struct {
    ConsumerArns []string `json:"ConsumerArns"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

