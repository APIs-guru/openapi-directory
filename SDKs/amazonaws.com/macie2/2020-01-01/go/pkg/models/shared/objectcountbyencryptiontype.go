package shared

// ObjectCountByEncryptionType
// Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted.
type ObjectCountByEncryptionType struct {
	CustomerManaged *int64 `json:"customerManaged,omitempty"`
	KmsManaged      *int64 `json:"kmsManaged,omitempty"`
	S3Managed       *int64 `json:"s3Managed,omitempty"`
	Unencrypted     *int64 `json:"unencrypted,omitempty"`
	Unknown         *int64 `json:"unknown,omitempty"`
}
