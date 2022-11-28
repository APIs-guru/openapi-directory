package shared

// UserInitiatedCancellation
// Information specific to cancellations initiated by users.
type UserInitiatedCancellation struct {
	CancelSurveyResult *CancelSurveyResult `json:"cancelSurveyResult,omitempty"`
	CancelTime         *string             `json:"cancelTime,omitempty"`
}
