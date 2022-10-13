package shared

type ServerSideEncryption struct {
	EncryptionType *EncryptionTypeEnum `json:"encryptionType"`
	KmsMasterKeyID *string             `json:"kmsMasterKeyId"`
}
