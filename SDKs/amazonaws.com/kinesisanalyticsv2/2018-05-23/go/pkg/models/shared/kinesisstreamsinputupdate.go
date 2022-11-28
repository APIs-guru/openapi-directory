package shared

// KinesisStreamsInputUpdate
// When you update the input configuration for a SQL-based Kinesis Data Analytics application, provides information about a Kinesis stream as the streaming source.
type KinesisStreamsInputUpdate struct {
	ResourceArnUpdate string `json:"ResourceARNUpdate"`
}
