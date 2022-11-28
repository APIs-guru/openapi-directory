package shared

// KinesisFirehoseOutputUpdate
//
//	When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis Firehose delivery stream configured as the destination.
type KinesisFirehoseOutputUpdate struct {
	ResourceArnUpdate *string `json:"ResourceARNUpdate,omitempty"`
	RoleArnUpdate     *string `json:"RoleARNUpdate,omitempty"`
}
