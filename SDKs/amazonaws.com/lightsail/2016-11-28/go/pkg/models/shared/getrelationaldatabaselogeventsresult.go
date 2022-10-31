package shared



type GetRelationalDatabaseLogEventsResult struct {
    NextBackwardToken *string `json:"nextBackwardToken,omitempty"`
    NextForwardToken *string `json:"nextForwardToken,omitempty"`
    ResourceLogEvents []LogEvent `json:"resourceLogEvents,omitempty"`
    
}

