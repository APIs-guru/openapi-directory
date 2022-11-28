package shared

// KinesisFirehoseInputUpdate
// When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source.
type KinesisFirehoseInputUpdate struct {
	ResourceArnUpdate *string `json:"ResourceARNUpdate,omitempty"`
	RoleArnUpdate     *string `json:"RoleARNUpdate,omitempty"`
}
