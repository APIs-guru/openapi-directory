package shared

// Input
// When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
type Input struct {
	InputParallelism             *InputParallelism             `json:"InputParallelism,omitempty"`
	InputProcessingConfiguration *InputProcessingConfiguration `json:"InputProcessingConfiguration,omitempty"`
	InputSchema                  SourceSchema                  `json:"InputSchema"`
	KinesisFirehoseInput         *KinesisFirehoseInput         `json:"KinesisFirehoseInput,omitempty"`
	KinesisStreamsInput          *KinesisStreamsInput          `json:"KinesisStreamsInput,omitempty"`
	NamePrefix                   string                        `json:"NamePrefix"`
}
