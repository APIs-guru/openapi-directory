package shared



type CompleteWorkflowExecutionFailedEventAttributes struct {
    Cause CompleteWorkflowExecutionFailedCauseEnum `json:"cause"`
    DecisionTaskCompletedEventID int64 `json:"decisionTaskCompletedEventId"`
    
}

