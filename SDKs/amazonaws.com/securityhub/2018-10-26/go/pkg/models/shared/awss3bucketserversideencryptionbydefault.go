package shared

type AwsS3BucketServerSideEncryptionByDefault struct {
	KmsMasterKeyID *string `json:"KMSMasterKeyID"`
	SseAlgorithm   *string `json:"SSEAlgorithm"`
}
