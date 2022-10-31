package shared



type LambdaFunctionFailedEventAttributes struct {
    Details *string `json:"details,omitempty"`
    Reason *string `json:"reason,omitempty"`
    ScheduledEventID int64 `json:"scheduledEventId"`
    StartedEventID int64 `json:"startedEventId"`
    
}

