package shared



type CancelTimerFailedEventAttributes struct {
    Cause CancelTimerFailedCauseEnum `json:"cause"`
    DecisionTaskCompletedEventID int64 `json:"decisionTaskCompletedEventId"`
    TimerID string `json:"timerId"`
    
}

