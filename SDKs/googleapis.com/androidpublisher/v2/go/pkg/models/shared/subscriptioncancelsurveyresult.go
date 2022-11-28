package shared

// SubscriptionCancelSurveyResult
// Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
type SubscriptionCancelSurveyResult struct {
	CancelSurveyReason    *int32
	UserInputCancelReason *string
}
