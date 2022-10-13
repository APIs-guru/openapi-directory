package shared

type RegisterUsageRequest struct {
	Nonce            *string `json:"Nonce"`
	ProductCode      string  `json:"ProductCode"`
	PublicKeyVersion int64   `json:"PublicKeyVersion"`
}
