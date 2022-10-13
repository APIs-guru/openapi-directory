package shared

type Record struct {
	AwsRegion    *string            `json:"awsRegion"`
	Dynamodb     *StreamRecord      `json:"dynamodb"`
	EventID      *string            `json:"eventID"`
	EventName    *OperationTypeEnum `json:"eventName"`
	EventSource  *string            `json:"eventSource"`
	EventVersion *string            `json:"eventVersion"`
	UserIdentity *Identity          `json:"userIdentity"`
}
