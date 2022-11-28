package shared

// AlgorithmStatusItem
// Represents the overall status of an algorithm.
type AlgorithmStatusItem struct {
	FailureReason *string                     `json:"FailureReason,omitempty"`
	Name          string                      `json:"Name"`
	Status        DetailedAlgorithmStatusEnum `json:"Status"`
}
