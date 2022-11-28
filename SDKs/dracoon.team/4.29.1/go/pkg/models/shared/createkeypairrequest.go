package shared

// CreateKeyPairRequest
// Request model for creating a key pair
type CreateKeyPairRequest struct {
	PreviousPrivateKey  PrivateKeyContainer `json:"previousPrivateKey"`
	PrivateKeyContainer PrivateKeyContainer `json:"privateKeyContainer"`
	PublicKeyContainer  PublicKeyContainer  `json:"publicKeyContainer"`
}
