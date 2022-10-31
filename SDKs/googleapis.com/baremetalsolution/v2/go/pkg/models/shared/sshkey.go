package shared

type SSHKey struct {
	Name      *string `json:"name,omitempty"`
	PublicKey *string `json:"publicKey,omitempty"`
}
