package shared

// KinesisFirehoseInput
//
//	Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
type KinesisFirehoseInput struct {
	ResourceArn string `json:"ResourceARN"`
	RoleArn     string `json:"RoleARN"`
}
