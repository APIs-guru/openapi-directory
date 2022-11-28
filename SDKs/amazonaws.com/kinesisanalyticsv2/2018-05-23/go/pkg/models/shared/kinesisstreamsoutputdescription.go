package shared

// KinesisStreamsOutputDescription
// For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination.
type KinesisStreamsOutputDescription struct {
	ResourceArn string  `json:"ResourceARN"`
	RoleArn     *string `json:"RoleARN,omitempty"`
}
