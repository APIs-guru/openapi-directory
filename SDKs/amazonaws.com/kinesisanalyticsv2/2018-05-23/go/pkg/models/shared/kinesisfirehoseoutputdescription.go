package shared

// KinesisFirehoseOutputDescription
// For a SQL-based Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination.
type KinesisFirehoseOutputDescription struct {
	ResourceArn string  `json:"ResourceARN"`
	RoleArn     *string `json:"RoleARN,omitempty"`
}
