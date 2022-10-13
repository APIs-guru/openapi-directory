package shared

type EncryptionConfig struct {
	KeyID  *string               `json:"KeyId"`
	Status *EncryptionStatusEnum `json:"Status"`
	Type   *EncryptionTypeEnum   `json:"Type"`
}
