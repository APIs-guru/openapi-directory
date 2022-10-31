package shared

type Command struct {
	AcknowledgedAt *string `json:"AcknowledgedAt,omitempty"`
	CommandID      *string `json:"CommandId,omitempty"`
	CompletedAt    *string `json:"CompletedAt,omitempty"`
	CreatedAt      *string `json:"CreatedAt,omitempty"`
	DeploymentID   *string `json:"DeploymentId,omitempty"`
	ExitCode       *int64  `json:"ExitCode,omitempty"`
	InstanceID     *string `json:"InstanceId,omitempty"`
	LogURL         *string `json:"LogUrl,omitempty"`
	Status         *string `json:"Status,omitempty"`
	Type           *string `json:"Type,omitempty"`
}
