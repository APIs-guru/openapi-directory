package shared

type S3StorageConfig struct {
	KmsKeyID            *string `json:"KmsKeyId,omitempty"`
	ResolvedOutputS3URI *string `json:"ResolvedOutputS3Uri,omitempty"`
	S3URI               string  `json:"S3Uri"`
}
