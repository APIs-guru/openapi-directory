package shared

type EncryptionKey struct {
	ID   string                `json:"Id"`
	Type EncryptionKeyTypeEnum `json:"Type"`
}
