package shared

type AlgorithmStatusItem struct {
	FailureReason *string                     `json:"FailureReason"`
	Name          string                      `json:"Name"`
	Status        DetailedAlgorithmStatusEnum `json:"Status"`
}
