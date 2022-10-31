package shared

type SubscriptionCancelSurveyResult struct {
	CancelSurveyReason    *int32  `json:"cancelSurveyReason,omitempty"`
	UserInputCancelReason *string `json:"userInputCancelReason,omitempty"`
}
