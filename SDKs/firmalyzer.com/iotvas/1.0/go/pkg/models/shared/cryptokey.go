package shared

type CryptoKey struct {
	Algorithm *string `json:"algorithm"`
	Bits      *int64  `json:"bits"`
	FileHash  *string `json:"file_hash"`
	FileName  *string `json:"file_name"`
	PemType   *string `json:"pem_type"`
}
