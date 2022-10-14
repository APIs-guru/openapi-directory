package shared

type BucketCountByEncryptionType struct {
	KmsManaged  *int64 `json:"kmsManaged,omitempty"`
	S3Managed   *int64 `json:"s3Managed,omitempty"`
	Unencrypted *int64 `json:"unencrypted,omitempty"`
	Unknown     *int64 `json:"unknown,omitempty"`
}
