package shared

type StartActivityStreamResponse struct {
	ApplyImmediately                *bool
	EngineNativeAuditFieldsIncluded *bool
	KinesisStreamName               *string
	KmsKeyID                        *string
	Mode                            *ActivityStreamModeEnum
	Status                          *ActivityStreamStatusEnum
}
