package shared

// KinesisFirehoseOutput
// For a SQL-based Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream.
type KinesisFirehoseOutput struct {
	ResourceArn string `json:"ResourceARN"`
}
