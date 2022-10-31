package shared

type UserUserPublicKey struct {
	ID                 *int64              `json:"id,omitempty"`
	PublicKeyContainer *PublicKeyContainer `json:"publicKeyContainer,omitempty"`
}
