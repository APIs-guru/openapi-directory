package shared

// KinesisFirehoseOutputUpdate
// For a SQL-based Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination.
type KinesisFirehoseOutputUpdate struct {
	ResourceArnUpdate string `json:"ResourceARNUpdate"`
}
