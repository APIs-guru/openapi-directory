package shared



type CancelWorkflowExecutionFailedEventAttributes struct {
    Cause CancelWorkflowExecutionFailedCauseEnum `json:"cause"`
    DecisionTaskCompletedEventID int64 `json:"decisionTaskCompletedEventId"`
    
}

