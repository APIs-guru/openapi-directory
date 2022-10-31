package shared



type DecisionTaskCompletedEventAttributes struct {
    ExecutionContext *string `json:"executionContext,omitempty"`
    ScheduledEventID int64 `json:"scheduledEventId"`
    StartedEventID int64 `json:"startedEventId"`
    
}

