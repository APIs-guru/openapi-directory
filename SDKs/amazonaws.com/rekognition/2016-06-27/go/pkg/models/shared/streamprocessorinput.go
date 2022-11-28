package shared

// StreamProcessorInput
// Information about the source streaming video.
type StreamProcessorInput struct {
	KinesisVideoStream *KinesisVideoStream `json:"KinesisVideoStream,omitempty"`
}
