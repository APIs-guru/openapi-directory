package shared



type RecordMarkerFailedEventAttributes struct {
    Cause RecordMarkerFailedCauseEnum `json:"cause"`
    DecisionTaskCompletedEventID int64 `json:"decisionTaskCompletedEventId"`
    MarkerName string `json:"markerName"`
    
}

