package shared

type FailureDetails struct {
	Details      map[string][]string `json:"Details"`
	FailureStage *string             `json:"FailureStage"`
	FailureType  *string             `json:"FailureType"`
}
