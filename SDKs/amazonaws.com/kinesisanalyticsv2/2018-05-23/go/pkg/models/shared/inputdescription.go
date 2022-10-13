package shared

type InputDescription struct {
	InAppStreamNames                        []string                                 `json:"InAppStreamNames"`
	InputID                                 *string                                  `json:"InputId"`
	InputParallelism                        *InputParallelism                        `json:"InputParallelism"`
	InputProcessingConfigurationDescription *InputProcessingConfigurationDescription `json:"InputProcessingConfigurationDescription"`
	InputSchema                             *SourceSchema                            `json:"InputSchema"`
	InputStartingPositionConfiguration      *InputStartingPositionConfiguration      `json:"InputStartingPositionConfiguration"`
	KinesisFirehoseInputDescription         *KinesisFirehoseInputDescription         `json:"KinesisFirehoseInputDescription"`
	KinesisStreamsInputDescription          *KinesisStreamsInputDescription          `json:"KinesisStreamsInputDescription"`
	NamePrefix                              *string                                  `json:"NamePrefix"`
}
