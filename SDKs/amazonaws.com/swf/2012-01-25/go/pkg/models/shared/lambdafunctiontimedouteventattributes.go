package shared



type LambdaFunctionTimedOutEventAttributes struct {
    ScheduledEventID int64 `json:"scheduledEventId"`
    StartedEventID int64 `json:"startedEventId"`
    TimeoutType *LambdaFunctionTimeoutTypeEnum `json:"timeoutType,omitempty"`
    
}

