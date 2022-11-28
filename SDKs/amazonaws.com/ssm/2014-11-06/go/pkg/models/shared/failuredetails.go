package shared

// FailureDetails
// Information about an Automation failure.
type FailureDetails struct {
	Details      map[string][]string `json:"Details,omitempty"`
	FailureStage *string             `json:"FailureStage,omitempty"`
	FailureType  *string             `json:"FailureType,omitempty"`
}
