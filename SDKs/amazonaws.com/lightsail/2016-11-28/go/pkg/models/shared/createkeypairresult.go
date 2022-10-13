package shared

type CreateKeyPairResult struct {
	KeyPair          *KeyPair   `json:"keyPair"`
	Operation        *Operation `json:"operation"`
	PrivateKeyBase64 *string    `json:"privateKeyBase64"`
	PublicKeyBase64  *string    `json:"publicKeyBase64"`
}
