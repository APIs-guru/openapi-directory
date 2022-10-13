package shared

type VerifyRequest struct {
	GrantTokens      []string                 `json:"GrantTokens"`
	KeyID            string                   `json:"KeyId"`
	Message          string                   `json:"Message"`
	MessageType      *MessageTypeEnum         `json:"MessageType"`
	Signature        string                   `json:"Signature"`
	SigningAlgorithm SigningAlgorithmSpecEnum `json:"SigningAlgorithm"`
}
