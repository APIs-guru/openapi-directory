package shared



type DecisionTaskStartedEventAttributes struct {
    Identity *string `json:"identity,omitempty"`
    ScheduledEventID int64 `json:"scheduledEventId"`
    
}

