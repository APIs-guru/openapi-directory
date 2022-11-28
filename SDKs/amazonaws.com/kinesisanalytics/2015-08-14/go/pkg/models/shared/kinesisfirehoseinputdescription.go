package shared

// KinesisFirehoseInputDescription
//
//	Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source in the application input configuration.
type KinesisFirehoseInputDescription struct {
	ResourceArn *string `json:"ResourceARN,omitempty"`
	RoleArn     *string `json:"RoleARN,omitempty"`
}
