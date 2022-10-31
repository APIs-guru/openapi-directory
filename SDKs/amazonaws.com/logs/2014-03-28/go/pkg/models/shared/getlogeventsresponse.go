package shared



type GetLogEventsResponse struct {
    Events []OutputLogEvent `json:"events,omitempty"`
    NextBackwardToken *string `json:"nextBackwardToken,omitempty"`
    NextForwardToken *string `json:"nextForwardToken,omitempty"`
    
}

