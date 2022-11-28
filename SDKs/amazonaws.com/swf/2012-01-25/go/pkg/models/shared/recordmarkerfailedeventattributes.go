package shared

// RecordMarkerFailedEventAttributes
// Provides the details of the <code>RecordMarkerFailed</code> event.
type RecordMarkerFailedEventAttributes struct {
	Cause                        RecordMarkerFailedCauseEnum `json:"cause"`
	DecisionTaskCompletedEventID int64                       `json:"decisionTaskCompletedEventId"`
	MarkerName                   string                      `json:"markerName"`
}
