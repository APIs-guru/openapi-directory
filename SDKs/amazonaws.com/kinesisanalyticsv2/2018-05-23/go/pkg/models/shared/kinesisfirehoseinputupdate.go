package shared

// KinesisFirehoseInputUpdate
// For a SQL-based Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source.
type KinesisFirehoseInputUpdate struct {
	ResourceArnUpdate string `json:"ResourceARNUpdate"`
}
