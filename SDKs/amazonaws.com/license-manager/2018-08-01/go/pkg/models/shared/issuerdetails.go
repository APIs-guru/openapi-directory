package shared

type IssuerDetails struct {
	KeyFingerprint *string `json:"KeyFingerprint,omitempty"`
	Name           *string `json:"Name,omitempty"`
	SignKey        *string `json:"SignKey,omitempty"`
}
