package shared

type InputUpdate struct {
	InputID                            string                              `json:"InputId"`
	InputParallelismUpdate             *InputParallelismUpdate             `json:"InputParallelismUpdate"`
	InputProcessingConfigurationUpdate *InputProcessingConfigurationUpdate `json:"InputProcessingConfigurationUpdate"`
	InputSchemaUpdate                  *InputSchemaUpdate                  `json:"InputSchemaUpdate"`
	KinesisFirehoseInputUpdate         *KinesisFirehoseInputUpdate         `json:"KinesisFirehoseInputUpdate"`
	KinesisStreamsInputUpdate          *KinesisStreamsInputUpdate          `json:"KinesisStreamsInputUpdate"`
	NamePrefixUpdate                   *string                             `json:"NamePrefixUpdate"`
}
