package shared

// KinesisStreamsOutput
// When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf.
type KinesisStreamsOutput struct {
	ResourceArn string `json:"ResourceARN"`
	RoleArn     string `json:"RoleARN"`
}
