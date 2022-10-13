package shared

type ExecutionStatus struct {
	FailureReason *string                         `json:"FailureReason"`
	Status        *AnomalyDetectionTaskStatusEnum `json:"Status"`
	Timestamp     *string                         `json:"Timestamp"`
}
