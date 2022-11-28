package shared

// BatchInferenceJobOutput
// The output configuration parameters of a batch inference job.
type BatchInferenceJobOutput struct {
	S3DataDestination S3DataConfig `json:"s3DataDestination"`
}
