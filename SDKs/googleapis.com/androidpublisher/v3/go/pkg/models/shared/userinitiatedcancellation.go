package shared

type UserInitiatedCancellation struct {
	CancelSurveyResult *CancelSurveyResult `json:"cancelSurveyResult"`
	CancelTime         *string             `json:"cancelTime"`
}
