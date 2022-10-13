package shared

type IssuerDetails struct {
	KeyFingerprint *string `json:"KeyFingerprint"`
	Name           *string `json:"Name"`
	SignKey        *string `json:"SignKey"`
}
