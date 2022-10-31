package shared



type ContinueAsNewWorkflowExecutionFailedEventAttributes struct {
    Cause ContinueAsNewWorkflowExecutionFailedCauseEnum `json:"cause"`
    DecisionTaskCompletedEventID int64 `json:"decisionTaskCompletedEventId"`
    
}

