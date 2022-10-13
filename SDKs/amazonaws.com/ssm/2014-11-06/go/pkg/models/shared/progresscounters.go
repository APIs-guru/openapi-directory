package shared

type ProgressCounters struct {
	CancelledSteps *int64 `json:"CancelledSteps"`
	FailedSteps    *int64 `json:"FailedSteps"`
	SuccessSteps   *int64 `json:"SuccessSteps"`
	TimedOutSteps  *int64 `json:"TimedOutSteps"`
	TotalSteps     *int64 `json:"TotalSteps"`
}
