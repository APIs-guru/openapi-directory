package shared

type SSHKey struct {
	Fingerprint *string `json:"fingerprint"`
	PublicKey   *string `json:"public_key"`
}
