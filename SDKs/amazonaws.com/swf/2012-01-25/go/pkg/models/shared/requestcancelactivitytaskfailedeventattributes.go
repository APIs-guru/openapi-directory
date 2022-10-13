package shared

type RequestCancelActivityTaskFailedEventAttributes struct {
	ActivityID                   string                                   `json:"activityId"`
	Cause                        RequestCancelActivityTaskFailedCauseEnum `json:"cause"`
	DecisionTaskCompletedEventID int64                                    `json:"decisionTaskCompletedEventId"`
}
