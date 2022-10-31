package shared



type ScheduleLambdaFunctionFailedEventAttributes struct {
    Cause ScheduleLambdaFunctionFailedCauseEnum `json:"cause"`
    DecisionTaskCompletedEventID int64 `json:"decisionTaskCompletedEventId"`
    ID string `json:"id"`
    Name string `json:"name"`
    
}

