package shared



type DescribeEventsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ServerEvents []ServerEvent `json:"ServerEvents,omitempty"`
    
}

