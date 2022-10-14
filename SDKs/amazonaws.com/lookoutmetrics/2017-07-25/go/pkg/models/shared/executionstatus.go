package shared

type ExecutionStatus struct {
	FailureReason *string                         `json:"FailureReason,omitempty"`
	Status        *AnomalyDetectionTaskStatusEnum `json:"Status,omitempty"`
	Timestamp     *string                         `json:"Timestamp,omitempty"`
}
