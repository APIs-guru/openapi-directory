package shared

type BatchInferenceJobOutput struct {
	S3DataDestination S3DataConfig `json:"s3DataDestination"`
}
