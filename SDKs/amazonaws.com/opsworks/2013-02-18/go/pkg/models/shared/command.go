package shared

type Command struct {
	AcknowledgedAt *string `json:"AcknowledgedAt"`
	CommandID      *string `json:"CommandId"`
	CompletedAt    *string `json:"CompletedAt"`
	CreatedAt      *string `json:"CreatedAt"`
	DeploymentID   *string `json:"DeploymentId"`
	ExitCode       *int64  `json:"ExitCode"`
	InstanceID     *string `json:"InstanceId"`
	LogURL         *string `json:"LogUrl"`
	Status         *string `json:"Status"`
	Type           *string `json:"Type"`
}
