package shared

type UpdateAnswerOutput struct {
	Answer     *Answer `json:"Answer"`
	LensAlias  *string `json:"LensAlias"`
	WorkloadID *string `json:"WorkloadId"`
}
