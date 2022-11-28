package shared

// KinesisStreamsInputDescription
//
//	Describes the Amazon Kinesis stream that is configured as the streaming source in the application input configuration.
type KinesisStreamsInputDescription struct {
	ResourceArn *string `json:"ResourceARN,omitempty"`
	RoleArn     *string `json:"RoleARN,omitempty"`
}
