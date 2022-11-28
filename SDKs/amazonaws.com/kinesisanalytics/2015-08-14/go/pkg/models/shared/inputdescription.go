package shared

// InputDescription
// Describes the application input configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
type InputDescription struct {
	InAppStreamNames                        []string                                 `json:"InAppStreamNames,omitempty"`
	InputID                                 *string                                  `json:"InputId,omitempty"`
	InputParallelism                        *InputParallelism                        `json:"InputParallelism,omitempty"`
	InputProcessingConfigurationDescription *InputProcessingConfigurationDescription `json:"InputProcessingConfigurationDescription,omitempty"`
	InputSchema                             *SourceSchema                            `json:"InputSchema,omitempty"`
	InputStartingPositionConfiguration      *InputStartingPositionConfiguration      `json:"InputStartingPositionConfiguration,omitempty"`
	KinesisFirehoseInputDescription         *KinesisFirehoseInputDescription         `json:"KinesisFirehoseInputDescription,omitempty"`
	KinesisStreamsInputDescription          *KinesisStreamsInputDescription          `json:"KinesisStreamsInputDescription,omitempty"`
	NamePrefix                              *string                                  `json:"NamePrefix,omitempty"`
}
