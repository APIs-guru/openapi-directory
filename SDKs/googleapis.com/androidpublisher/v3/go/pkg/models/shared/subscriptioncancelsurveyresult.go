package shared

// SubscriptionCancelSurveyResult
// Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
type SubscriptionCancelSurveyResult struct {
	CancelSurveyReason    *int32  `json:"cancelSurveyReason,omitempty"`
	UserInputCancelReason *string `json:"userInputCancelReason,omitempty"`
}
