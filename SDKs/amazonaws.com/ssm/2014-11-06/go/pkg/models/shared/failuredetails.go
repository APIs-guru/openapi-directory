package shared

type FailureDetails struct {
	Details      map[string][]string `json:"Details,omitempty"`
	FailureStage *string             `json:"FailureStage,omitempty"`
	FailureType  *string             `json:"FailureType,omitempty"`
}
