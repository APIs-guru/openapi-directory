package shared

// UserUserPublicKeyOutput
// Public key information
type UserUserPublicKeyOutput struct {
	ID                 *int64                    `json:"id,omitempty"`
	PublicKeyContainer *PublicKeyContainerOutput `json:"publicKeyContainer,omitempty"`
}
