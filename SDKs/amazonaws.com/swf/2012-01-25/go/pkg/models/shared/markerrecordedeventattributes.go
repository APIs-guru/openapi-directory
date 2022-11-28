package shared

// MarkerRecordedEventAttributes
// Provides the details of the <code>MarkerRecorded</code> event.
type MarkerRecordedEventAttributes struct {
	DecisionTaskCompletedEventID int64   `json:"decisionTaskCompletedEventId"`
	Details                      *string `json:"details,omitempty"`
	MarkerName                   string  `json:"markerName"`
}
