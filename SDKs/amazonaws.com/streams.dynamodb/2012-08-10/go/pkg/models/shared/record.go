package shared

type Record struct {
	AwsRegion    *string            `json:"awsRegion,omitempty"`
	Dynamodb     *StreamRecord      `json:"dynamodb,omitempty"`
	EventID      *string            `json:"eventID,omitempty"`
	EventName    *OperationTypeEnum `json:"eventName,omitempty"`
	EventSource  *string            `json:"eventSource,omitempty"`
	EventVersion *string            `json:"eventVersion,omitempty"`
	UserIdentity *Identity          `json:"userIdentity,omitempty"`
}
