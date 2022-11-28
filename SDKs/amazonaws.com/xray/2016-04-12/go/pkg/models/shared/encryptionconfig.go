package shared

// EncryptionConfig
// A configuration document that specifies encryption configuration settings.
type EncryptionConfig struct {
	KeyID  *string               `json:"KeyId,omitempty"`
	Status *EncryptionStatusEnum `json:"Status,omitempty"`
	Type   *EncryptionTypeEnum   `json:"Type,omitempty"`
}
