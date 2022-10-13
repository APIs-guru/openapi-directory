package shared

type OutputDescription struct {
	DestinationSchema                *DestinationSchema                `json:"DestinationSchema"`
	KinesisFirehoseOutputDescription *KinesisFirehoseOutputDescription `json:"KinesisFirehoseOutputDescription"`
	KinesisStreamsOutputDescription  *KinesisStreamsOutputDescription  `json:"KinesisStreamsOutputDescription"`
	LambdaOutputDescription          *LambdaOutputDescription          `json:"LambdaOutputDescription"`
	Name                             *string                           `json:"Name"`
	OutputID                         *string                           `json:"OutputId"`
}
