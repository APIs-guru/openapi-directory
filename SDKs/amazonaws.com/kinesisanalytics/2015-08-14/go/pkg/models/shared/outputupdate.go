package shared

type OutputUpdate struct {
	DestinationSchemaUpdate     *DestinationSchema           `json:"DestinationSchemaUpdate,omitempty"`
	KinesisFirehoseOutputUpdate *KinesisFirehoseOutputUpdate `json:"KinesisFirehoseOutputUpdate,omitempty"`
	KinesisStreamsOutputUpdate  *KinesisStreamsOutputUpdate  `json:"KinesisStreamsOutputUpdate,omitempty"`
	LambdaOutputUpdate          *LambdaOutputUpdate          `json:"LambdaOutputUpdate,omitempty"`
	NameUpdate                  *string                      `json:"NameUpdate,omitempty"`
	OutputID                    string                       `json:"OutputId"`
}
