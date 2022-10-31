package shared

type Crypto struct {
	Cipher       string       `json:"cipher"`
	Cipherparams Cipherparams `json:"cipherparams"`
	Ciphertext   string       `json:"ciphertext"`
	Kdf          string       `json:"kdf"`
	Kdfparams    Kdfparams    `json:"kdfparams"`
	Mac          string       `json:"mac"`
}
