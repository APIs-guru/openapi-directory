package shared



type StartTimerFailedEventAttributes struct {
    Cause StartTimerFailedCauseEnum `json:"cause"`
    DecisionTaskCompletedEventID int64 `json:"decisionTaskCompletedEventId"`
    TimerID string `json:"timerId"`
    
}

