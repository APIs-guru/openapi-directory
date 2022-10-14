package shared

type OutputDescription struct {
	DestinationSchema                *DestinationSchema                `json:"DestinationSchema,omitempty"`
	KinesisFirehoseOutputDescription *KinesisFirehoseOutputDescription `json:"KinesisFirehoseOutputDescription,omitempty"`
	KinesisStreamsOutputDescription  *KinesisStreamsOutputDescription  `json:"KinesisStreamsOutputDescription,omitempty"`
	LambdaOutputDescription          *LambdaOutputDescription          `json:"LambdaOutputDescription,omitempty"`
	Name                             *string                           `json:"Name,omitempty"`
	OutputID                         *string                           `json:"OutputId,omitempty"`
}
