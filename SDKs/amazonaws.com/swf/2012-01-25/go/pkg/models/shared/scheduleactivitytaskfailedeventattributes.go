package shared



type ScheduleActivityTaskFailedEventAttributes struct {
    ActivityID string `json:"activityId"`
    ActivityType ActivityType `json:"activityType"`
    Cause ScheduleActivityTaskFailedCauseEnum `json:"cause"`
    DecisionTaskCompletedEventID int64 `json:"decisionTaskCompletedEventId"`
    
}

