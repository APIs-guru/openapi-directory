package shared

// KinesisVideoStream
// Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
type KinesisVideoStream struct {
	Arn *string `json:"Arn,omitempty"`
}
