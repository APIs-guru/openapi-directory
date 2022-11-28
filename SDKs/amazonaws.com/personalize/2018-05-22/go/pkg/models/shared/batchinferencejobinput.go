package shared

// BatchInferenceJobInput
// The input configuration of a batch inference job.
type BatchInferenceJobInput struct {
	S3DataSource S3DataConfig `json:"s3DataSource"`
}
