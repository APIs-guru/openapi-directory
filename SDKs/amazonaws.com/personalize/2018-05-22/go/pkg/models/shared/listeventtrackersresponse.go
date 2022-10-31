package shared



type ListEventTrackersResponse struct {
    EventTrackers []EventTrackerSummary `json:"eventTrackers,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

