package shared

type S3DataConfig struct {
	KmsKeyArn *string `json:"kmsKeyArn,omitempty"`
	Path      string  `json:"path"`
}
