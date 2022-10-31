package shared



type UserInitiatedCancellation struct {
    CancelSurveyResult *CancelSurveyResult `json:"cancelSurveyResult,omitempty"`
    CancelTime *string `json:"cancelTime,omitempty"`
    
}

