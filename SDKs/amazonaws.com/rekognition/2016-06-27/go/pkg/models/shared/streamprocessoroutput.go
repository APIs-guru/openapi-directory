package shared

// StreamProcessorOutput
// Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
type StreamProcessorOutput struct {
	KinesisDataStream *KinesisDataStream `json:"KinesisDataStream,omitempty"`
}
