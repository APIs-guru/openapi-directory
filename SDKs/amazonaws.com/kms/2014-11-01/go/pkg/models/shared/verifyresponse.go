package shared

type VerifyResponse struct {
	KeyID            *string                   `json:"KeyId"`
	SignatureValid   *bool                     `json:"SignatureValid"`
	SigningAlgorithm *SigningAlgorithmSpecEnum `json:"SigningAlgorithm"`
}
