package shared

type Output struct {
	DestinationSchema     DestinationSchema      `json:"DestinationSchema"`
	KinesisFirehoseOutput *KinesisFirehoseOutput `json:"KinesisFirehoseOutput"`
	KinesisStreamsOutput  *KinesisStreamsOutput  `json:"KinesisStreamsOutput"`
	LambdaOutput          *LambdaOutput          `json:"LambdaOutput"`
	Name                  string                 `json:"Name"`
}
