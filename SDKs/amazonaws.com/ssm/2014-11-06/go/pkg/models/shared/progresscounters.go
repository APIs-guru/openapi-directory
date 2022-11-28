package shared

// ProgressCounters
// An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a multi-Region and multi-account Automation execution.
type ProgressCounters struct {
	CancelledSteps *int64 `json:"CancelledSteps,omitempty"`
	FailedSteps    *int64 `json:"FailedSteps,omitempty"`
	SuccessSteps   *int64 `json:"SuccessSteps,omitempty"`
	TimedOutSteps  *int64 `json:"TimedOutSteps,omitempty"`
	TotalSteps     *int64 `json:"TotalSteps,omitempty"`
}
