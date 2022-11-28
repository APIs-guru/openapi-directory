package shared

// ServerSideEncryption
// Provides information about the server-side encryption settings for an S3 bucket or S3 object.
type ServerSideEncryption struct {
	EncryptionType *EncryptionTypeEnum `json:"encryptionType,omitempty"`
	KmsMasterKeyID *string             `json:"kmsMasterKeyId,omitempty"`
}
