package shared

type VerifyRequest struct {
	GrantTokens      []string                 `json:"GrantTokens,omitempty"`
	KeyID            string                   `json:"KeyId"`
	Message          string                   `json:"Message"`
	MessageType      *MessageTypeEnum         `json:"MessageType,omitempty"`
	Signature        string                   `json:"Signature"`
	SigningAlgorithm SigningAlgorithmSpecEnum `json:"SigningAlgorithm"`
}
