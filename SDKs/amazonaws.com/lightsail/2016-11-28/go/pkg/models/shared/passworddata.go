package shared

type PasswordData struct {
	Ciphertext  *string `json:"ciphertext"`
	KeyPairName *string `json:"keyPairName"`
}
