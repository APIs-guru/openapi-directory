package shared

type UpdateAnswerOutput struct {
	Answer     *Answer `json:"Answer,omitempty"`
	LensAlias  *string `json:"LensAlias,omitempty"`
	WorkloadID *string `json:"WorkloadId,omitempty"`
}
