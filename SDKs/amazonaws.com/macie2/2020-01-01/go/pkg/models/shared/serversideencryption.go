package shared

type ServerSideEncryption struct {
	EncryptionType *EncryptionTypeEnum `json:"encryptionType,omitempty"`
	KmsMasterKeyID *string             `json:"kmsMasterKeyId,omitempty"`
}
