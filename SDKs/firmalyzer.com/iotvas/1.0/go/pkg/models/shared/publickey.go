package shared

type PublicKey struct {
	Algorithm *string `json:"algorithm"`
	Bits      *int64  `json:"bits"`
}
