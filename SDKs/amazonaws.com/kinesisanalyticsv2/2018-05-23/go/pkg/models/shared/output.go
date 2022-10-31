package shared

type Output struct {
	DestinationSchema     DestinationSchema      `json:"DestinationSchema"`
	KinesisFirehoseOutput *KinesisFirehoseOutput `json:"KinesisFirehoseOutput,omitempty"`
	KinesisStreamsOutput  *KinesisStreamsOutput  `json:"KinesisStreamsOutput,omitempty"`
	LambdaOutput          *LambdaOutput          `json:"LambdaOutput,omitempty"`
	Name                  string                 `json:"Name"`
}
