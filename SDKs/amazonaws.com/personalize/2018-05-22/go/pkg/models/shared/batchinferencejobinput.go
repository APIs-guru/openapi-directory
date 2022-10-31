package shared

type BatchInferenceJobInput struct {
	S3DataSource S3DataConfig `json:"s3DataSource"`
}
