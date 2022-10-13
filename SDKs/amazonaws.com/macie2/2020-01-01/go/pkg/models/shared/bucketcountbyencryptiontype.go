package shared

type BucketCountByEncryptionType struct {
	KmsManaged  *int64 `json:"kmsManaged"`
	S3Managed   *int64 `json:"s3Managed"`
	Unencrypted *int64 `json:"unencrypted"`
	Unknown     *int64 `json:"unknown"`
}
