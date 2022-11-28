package shared

// UserKeyPairContainerOutput
// Key pair container
type UserKeyPairContainerOutput struct {
	PrivateKeyContainer PrivateKeyContainerOutput `json:"privateKeyContainer"`
	PublicKeyContainer  PublicKeyContainerOutput  `json:"publicKeyContainer"`
}

// UserKeyPairContainer
// Key pair container
type UserKeyPairContainer struct {
	PrivateKeyContainer PrivateKeyContainer `json:"privateKeyContainer"`
	PublicKeyContainer  PublicKeyContainer  `json:"publicKeyContainer"`
}
