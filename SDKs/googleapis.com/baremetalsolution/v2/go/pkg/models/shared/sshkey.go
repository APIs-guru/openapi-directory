package shared

// SSHKey
// An SSH key, used for authorizing with the interactive serial console feature.
type SSHKey struct {
	Name      *string `json:"name,omitempty"`
	PublicKey *string `json:"publicKey,omitempty"`
}

// SSHKeyInput
// An SSH key, used for authorizing with the interactive serial console feature.
type SSHKeyInput struct {
	PublicKey *string `json:"publicKey,omitempty"`
}
