package shared

// Input
// When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.
type Input struct {
	InputParallelism             *InputParallelism             `json:"InputParallelism,omitempty"`
	InputProcessingConfiguration *InputProcessingConfiguration `json:"InputProcessingConfiguration,omitempty"`
	InputSchema                  SourceSchema                  `json:"InputSchema"`
	KinesisFirehoseInput         *KinesisFirehoseInput         `json:"KinesisFirehoseInput,omitempty"`
	KinesisStreamsInput          *KinesisStreamsInput          `json:"KinesisStreamsInput,omitempty"`
	NamePrefix                   string                        `json:"NamePrefix"`
}
