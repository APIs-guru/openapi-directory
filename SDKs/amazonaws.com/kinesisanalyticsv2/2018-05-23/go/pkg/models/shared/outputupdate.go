package shared

// OutputUpdate
//
//	For a SQL-based Kinesis Data Analytics application, describes updates to the output configuration identified by the <code>OutputId</code>.
type OutputUpdate struct {
	DestinationSchemaUpdate     *DestinationSchema           `json:"DestinationSchemaUpdate,omitempty"`
	KinesisFirehoseOutputUpdate *KinesisFirehoseOutputUpdate `json:"KinesisFirehoseOutputUpdate,omitempty"`
	KinesisStreamsOutputUpdate  *KinesisStreamsOutputUpdate  `json:"KinesisStreamsOutputUpdate,omitempty"`
	LambdaOutputUpdate          *LambdaOutputUpdate          `json:"LambdaOutputUpdate,omitempty"`
	NameUpdate                  *string                      `json:"NameUpdate,omitempty"`
	OutputID                    string                       `json:"OutputId"`
}
