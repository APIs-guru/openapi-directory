package shared

// KinesisDataStream
// The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
type KinesisDataStream struct {
	Arn *string `json:"Arn,omitempty"`
}
