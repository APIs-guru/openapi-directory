package shared

// KinesisFirehoseOutput
// When configuring application output, identifies an Amazon Kinesis Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to write to the stream on your behalf.
type KinesisFirehoseOutput struct {
	ResourceArn string `json:"ResourceARN"`
	RoleArn     string `json:"RoleARN"`
}
