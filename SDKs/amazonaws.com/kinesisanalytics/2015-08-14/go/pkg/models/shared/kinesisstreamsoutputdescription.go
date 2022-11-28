package shared

// KinesisStreamsOutputDescription
//
//	For an application output, describes the Amazon Kinesis stream configured as its destination.
type KinesisStreamsOutputDescription struct {
	ResourceArn *string `json:"ResourceARN,omitempty"`
	RoleArn     *string `json:"RoleARN,omitempty"`
}
