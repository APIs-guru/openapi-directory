package shared

type CreateKeyPairRequest struct {
	PreviousPrivateKey  PrivateKeyContainer `json:"previousPrivateKey"`
	PrivateKeyContainer PrivateKeyContainer `json:"privateKeyContainer"`
	PublicKeyContainer  PublicKeyContainer  `json:"publicKeyContainer"`
}
