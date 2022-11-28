package shared

// RequestCancelActivityTaskFailedEventAttributes
// Provides the details of the <code>RequestCancelActivityTaskFailed</code> event.
type RequestCancelActivityTaskFailedEventAttributes struct {
	ActivityID                   string                                   `json:"activityId"`
	Cause                        RequestCancelActivityTaskFailedCauseEnum `json:"cause"`
	DecisionTaskCompletedEventID int64                                    `json:"decisionTaskCompletedEventId"`
}
