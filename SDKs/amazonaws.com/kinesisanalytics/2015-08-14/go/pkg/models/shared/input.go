package shared

type Input struct {
	InputParallelism             *InputParallelism             `json:"InputParallelism,omitempty"`
	InputProcessingConfiguration *InputProcessingConfiguration `json:"InputProcessingConfiguration,omitempty"`
	InputSchema                  SourceSchema                  `json:"InputSchema"`
	KinesisFirehoseInput         *KinesisFirehoseInput         `json:"KinesisFirehoseInput,omitempty"`
	KinesisStreamsInput          *KinesisStreamsInput          `json:"KinesisStreamsInput,omitempty"`
	NamePrefix                   string                        `json:"NamePrefix"`
}
