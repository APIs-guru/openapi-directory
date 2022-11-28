package shared

// ActivityTaskCancelRequestedEventAttributes
// Provides the details of the <code>ActivityTaskCancelRequested</code> event.
type ActivityTaskCancelRequestedEventAttributes struct {
	ActivityID                   string `json:"activityId"`
	DecisionTaskCompletedEventID int64  `json:"decisionTaskCompletedEventId"`
}
