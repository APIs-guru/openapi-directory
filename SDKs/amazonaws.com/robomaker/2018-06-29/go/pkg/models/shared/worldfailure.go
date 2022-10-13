package shared

type WorldFailure struct {
	FailureCode         *WorldGenerationJobErrorCodeEnum `json:"failureCode"`
	FailureCount        *int64                           `json:"failureCount"`
	SampleFailureReason *string                          `json:"sampleFailureReason"`
}
