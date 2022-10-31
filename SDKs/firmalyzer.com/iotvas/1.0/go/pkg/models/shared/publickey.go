package shared

type PublicKey struct {
	Algorithm *string `json:"algorithm,omitempty"`
	Bits      *int64  `json:"bits,omitempty"`
}
