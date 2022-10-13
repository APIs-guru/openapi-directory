package shared

type UserUserPublicKey struct {
	ID                 *int64              `json:"id"`
	PublicKeyContainer *PublicKeyContainer `json:"publicKeyContainer"`
}
