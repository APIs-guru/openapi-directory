package shared

type StopActivityStreamResponse struct {
	KinesisStreamName *string
	KmsKeyID          *string
	Status            *ActivityStreamStatusEnum
}
