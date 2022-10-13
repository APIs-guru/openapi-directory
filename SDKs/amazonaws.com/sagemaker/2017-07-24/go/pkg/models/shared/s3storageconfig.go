package shared

type S3StorageConfig struct {
	KmsKeyID            *string `json:"KmsKeyId"`
	ResolvedOutputS3URI *string `json:"ResolvedOutputS3Uri"`
	S3URI               string  `json:"S3Uri"`
}
