package shared

type SSHKey struct {
	Fingerprint *string `json:"fingerprint,omitempty"`
	PublicKey   *string `json:"public_key,omitempty"`
}
