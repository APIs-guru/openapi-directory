package shared



type ActivityTaskCancelRequestedEventAttributes struct {
    ActivityID string `json:"activityId"`
    DecisionTaskCompletedEventID int64 `json:"decisionTaskCompletedEventId"`
    
}

