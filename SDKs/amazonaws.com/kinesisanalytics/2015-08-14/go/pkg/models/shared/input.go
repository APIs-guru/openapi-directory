package shared

type Input struct {
	InputParallelism             *InputParallelism             `json:"InputParallelism"`
	InputProcessingConfiguration *InputProcessingConfiguration `json:"InputProcessingConfiguration"`
	InputSchema                  SourceSchema                  `json:"InputSchema"`
	KinesisFirehoseInput         *KinesisFirehoseInput         `json:"KinesisFirehoseInput"`
	KinesisStreamsInput          *KinesisStreamsInput          `json:"KinesisStreamsInput"`
	NamePrefix                   string                        `json:"NamePrefix"`
}
