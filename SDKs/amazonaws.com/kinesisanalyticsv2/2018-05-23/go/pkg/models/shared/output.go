package shared

// Output
// <p> Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/>
type Output struct {
	DestinationSchema     DestinationSchema      `json:"DestinationSchema"`
	KinesisFirehoseOutput *KinesisFirehoseOutput `json:"KinesisFirehoseOutput,omitempty"`
	KinesisStreamsOutput  *KinesisStreamsOutput  `json:"KinesisStreamsOutput,omitempty"`
	LambdaOutput          *LambdaOutput          `json:"LambdaOutput,omitempty"`
	Name                  string                 `json:"Name"`
}
