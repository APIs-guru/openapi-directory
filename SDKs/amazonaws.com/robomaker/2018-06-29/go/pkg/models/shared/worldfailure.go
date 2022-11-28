package shared

// WorldFailure
// Information about a failed world.
type WorldFailure struct {
	FailureCode         *WorldGenerationJobErrorCodeEnum `json:"failureCode,omitempty"`
	FailureCount        *int64                           `json:"failureCount,omitempty"`
	SampleFailureReason *string                          `json:"sampleFailureReason,omitempty"`
}
