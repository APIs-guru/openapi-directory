package shared

type S3DataConfig struct {
	KmsKeyArn *string `json:"kmsKeyArn"`
	Path      string  `json:"path"`
}
