package shared

// KinesisStreamsInput
//
//	Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
type KinesisStreamsInput struct {
	ResourceArn string `json:"ResourceARN"`
	RoleArn     string `json:"RoleARN"`
}
