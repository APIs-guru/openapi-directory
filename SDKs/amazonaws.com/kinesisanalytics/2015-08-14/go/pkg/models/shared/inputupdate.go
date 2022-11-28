package shared

// InputUpdate
// Describes updates to a specific input configuration (identified by the <code>InputId</code> of an application).
type InputUpdate struct {
	InputID                            string                              `json:"InputId"`
	InputParallelismUpdate             *InputParallelismUpdate             `json:"InputParallelismUpdate,omitempty"`
	InputProcessingConfigurationUpdate *InputProcessingConfigurationUpdate `json:"InputProcessingConfigurationUpdate,omitempty"`
	InputSchemaUpdate                  *InputSchemaUpdate                  `json:"InputSchemaUpdate,omitempty"`
	KinesisFirehoseInputUpdate         *KinesisFirehoseInputUpdate         `json:"KinesisFirehoseInputUpdate,omitempty"`
	KinesisStreamsInputUpdate          *KinesisStreamsInputUpdate          `json:"KinesisStreamsInputUpdate,omitempty"`
	NamePrefixUpdate                   *string                             `json:"NamePrefixUpdate,omitempty"`
}
