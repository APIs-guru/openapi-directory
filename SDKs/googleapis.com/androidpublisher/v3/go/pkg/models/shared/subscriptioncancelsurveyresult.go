package shared

type SubscriptionCancelSurveyResult struct {
	CancelSurveyReason    *int32  `json:"cancelSurveyReason"`
	UserInputCancelReason *string `json:"userInputCancelReason"`
}
