package shared



type StartLambdaFunctionFailedEventAttributes struct {
    Cause *StartLambdaFunctionFailedCauseEnum `json:"cause,omitempty"`
    Message *string `json:"message,omitempty"`
    ScheduledEventID *int64 `json:"scheduledEventId,omitempty"`
    
}

