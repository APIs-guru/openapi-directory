package shared

// KinesisFirehoseInput
// For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN).
type KinesisFirehoseInput struct {
	ResourceArn string `json:"ResourceARN"`
}
