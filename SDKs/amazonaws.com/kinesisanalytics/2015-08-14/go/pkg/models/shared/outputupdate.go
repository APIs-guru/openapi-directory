package shared

type OutputUpdate struct {
	DestinationSchemaUpdate     *DestinationSchema           `json:"DestinationSchemaUpdate"`
	KinesisFirehoseOutputUpdate *KinesisFirehoseOutputUpdate `json:"KinesisFirehoseOutputUpdate"`
	KinesisStreamsOutputUpdate  *KinesisStreamsOutputUpdate  `json:"KinesisStreamsOutputUpdate"`
	LambdaOutputUpdate          *LambdaOutputUpdate          `json:"LambdaOutputUpdate"`
	NameUpdate                  *string                      `json:"NameUpdate"`
	OutputID                    string                       `json:"OutputId"`
}
