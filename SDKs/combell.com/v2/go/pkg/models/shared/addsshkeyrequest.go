package shared

type AddSSHKeyRequest struct {
	PublicKey *string `json:"public_key,omitempty"`
}
