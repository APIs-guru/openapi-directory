package shared

type StreamProcessorOutput struct {
	KinesisDataStream *KinesisDataStream `json:"KinesisDataStream,omitempty"`
}
