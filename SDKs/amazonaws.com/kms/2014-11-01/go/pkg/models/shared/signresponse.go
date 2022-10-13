package shared

type SignResponse struct {
	KeyID            *string                   `json:"KeyId"`
	Signature        *string                   `json:"Signature"`
	SigningAlgorithm *SigningAlgorithmSpecEnum `json:"SigningAlgorithm"`
}
