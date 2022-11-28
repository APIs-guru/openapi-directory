package shared

// OutputDescription
// For a SQL-based Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.
type OutputDescription struct {
	DestinationSchema                *DestinationSchema                `json:"DestinationSchema,omitempty"`
	KinesisFirehoseOutputDescription *KinesisFirehoseOutputDescription `json:"KinesisFirehoseOutputDescription,omitempty"`
	KinesisStreamsOutputDescription  *KinesisStreamsOutputDescription  `json:"KinesisStreamsOutputDescription,omitempty"`
	LambdaOutputDescription          *LambdaOutputDescription          `json:"LambdaOutputDescription,omitempty"`
	Name                             *string                           `json:"Name,omitempty"`
	OutputID                         *string                           `json:"OutputId,omitempty"`
}
