package shared

type MarkerRecordedEventAttributes struct {
	DecisionTaskCompletedEventID int64   `json:"decisionTaskCompletedEventId"`
	Details                      *string `json:"details"`
	MarkerName                   string  `json:"markerName"`
}
