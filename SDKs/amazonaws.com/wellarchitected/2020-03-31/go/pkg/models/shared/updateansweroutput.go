package shared

// UpdateAnswerOutput
// Output of a update answer call.
type UpdateAnswerOutput struct {
	Answer     *Answer `json:"Answer,omitempty"`
	LensAlias  *string `json:"LensAlias,omitempty"`
	WorkloadID *string `json:"WorkloadId,omitempty"`
}
