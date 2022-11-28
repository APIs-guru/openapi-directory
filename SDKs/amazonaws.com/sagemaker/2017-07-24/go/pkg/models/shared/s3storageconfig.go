package shared

// S3StorageConfig
// The Amazon Simple Storage (Amazon S3) location and and security configuration for <code>OfflineStore</code>.
type S3StorageConfig struct {
	KmsKeyID            *string `json:"KmsKeyId,omitempty"`
	ResolvedOutputS3URI *string `json:"ResolvedOutputS3Uri,omitempty"`
	S3URI               string  `json:"S3Uri"`
}
