package shared



type ListTimelineEventsOutput struct {
    EventSummaries []EventSummary `json:"eventSummaries"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

