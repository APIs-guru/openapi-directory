package shared

type RegisterUsageRequest struct {
	Nonce            *string `json:"Nonce,omitempty"`
	ProductCode      string  `json:"ProductCode"`
	PublicKeyVersion int64   `json:"PublicKeyVersion"`
}
