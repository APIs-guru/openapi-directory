package shared

// AwsS3BucketServerSideEncryptionByDefault
// Specifies the default server-side encryption to apply to new objects in the bucket.
type AwsS3BucketServerSideEncryptionByDefault struct {
	KmsMasterKeyID *string `json:"KMSMasterKeyID,omitempty"`
	SseAlgorithm   *string `json:"SSEAlgorithm,omitempty"`
}
