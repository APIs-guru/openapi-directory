package shared

type SSHKey struct {
	Name      *string `json:"name"`
	PublicKey *string `json:"publicKey"`
}
