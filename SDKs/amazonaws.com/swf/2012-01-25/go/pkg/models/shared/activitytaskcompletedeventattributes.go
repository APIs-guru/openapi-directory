package shared



type ActivityTaskCompletedEventAttributes struct {
    Result *string `json:"result,omitempty"`
    ScheduledEventID int64 `json:"scheduledEventId"`
    StartedEventID int64 `json:"startedEventId"`
    
}

