package shared

type AwsS3BucketServerSideEncryptionByDefault struct {
	KmsMasterKeyID *string `json:"KMSMasterKeyID,omitempty"`
	SseAlgorithm   *string `json:"SSEAlgorithm,omitempty"`
}
