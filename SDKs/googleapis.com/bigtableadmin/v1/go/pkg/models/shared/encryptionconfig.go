package shared

// EncryptionConfig
// Cloud Key Management Service (Cloud KMS) settings for a CMEK-protected cluster.
type EncryptionConfig struct {
	KmsKeyName *string `json:"kmsKeyName,omitempty"`
}
