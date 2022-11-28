package shared

// KinesisFirehoseOutputDescription
//
//	For an application output, describes the Amazon Kinesis Firehose delivery stream configured as its destination.
type KinesisFirehoseOutputDescription struct {
	ResourceArn *string `json:"ResourceARN,omitempty"`
	RoleArn     *string `json:"RoleARN,omitempty"`
}
