package shared

// PasswordData
// The password data for the Windows Server-based instance, including the ciphertext and the key pair name.
type PasswordData struct {
	Ciphertext  *string `json:"ciphertext,omitempty"`
	KeyPairName *string `json:"keyPairName,omitempty"`
}
