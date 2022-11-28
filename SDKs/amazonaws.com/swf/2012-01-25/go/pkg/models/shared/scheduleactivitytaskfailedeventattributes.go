package shared

// ScheduleActivityTaskFailedEventAttributes
// Provides the details of the <code>ScheduleActivityTaskFailed</code> event.
type ScheduleActivityTaskFailedEventAttributes struct {
	ActivityID                   string                              `json:"activityId"`
	ActivityType                 ActivityType                        `json:"activityType"`
	Cause                        ScheduleActivityTaskFailedCauseEnum `json:"cause"`
	DecisionTaskCompletedEventID int64                               `json:"decisionTaskCompletedEventId"`
}
