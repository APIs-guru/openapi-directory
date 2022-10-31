package shared



type AlgorithmStatusItem struct {
    FailureReason *string `json:"FailureReason,omitempty"`
    Name string `json:"Name"`
    Status DetailedAlgorithmStatusEnum `json:"Status"`
    
}

