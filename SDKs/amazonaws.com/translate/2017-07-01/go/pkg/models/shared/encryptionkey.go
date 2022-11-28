package shared

// EncryptionKey
// The encryption key used to encrypt this object.
type EncryptionKey struct {
	ID   string                `json:"Id"`
	Type EncryptionKeyTypeEnum `json:"Type"`
}
