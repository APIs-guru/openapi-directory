package shared

type GetPublicKeyResponse struct {
	CustomerMasterKeySpec *CustomerMasterKeySpecEnum    `json:"CustomerMasterKeySpec"`
	EncryptionAlgorithms  []EncryptionAlgorithmSpecEnum `json:"EncryptionAlgorithms"`
	KeyID                 *string                       `json:"KeyId"`
	KeySpec               *KeySpecEnum                  `json:"KeySpec"`
	KeyUsage              *KeyUsageTypeEnum             `json:"KeyUsage"`
	PublicKey             *string                       `json:"PublicKey"`
	SigningAlgorithms     []SigningAlgorithmSpecEnum    `json:"SigningAlgorithms"`
}
