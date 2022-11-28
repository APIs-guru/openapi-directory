package shared

// KinesisStreamsOutput
// When you configure a SQL-based Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN).
type KinesisStreamsOutput struct {
	ResourceArn string `json:"ResourceARN"`
}
