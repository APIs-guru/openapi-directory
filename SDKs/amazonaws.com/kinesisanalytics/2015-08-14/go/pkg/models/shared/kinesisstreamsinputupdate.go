package shared

// KinesisStreamsInputUpdate
// When updating application input configuration, provides information about an Amazon Kinesis stream as the streaming source.
type KinesisStreamsInputUpdate struct {
	ResourceArnUpdate *string `json:"ResourceARNUpdate,omitempty"`
	RoleArnUpdate     *string `json:"RoleARNUpdate,omitempty"`
}
