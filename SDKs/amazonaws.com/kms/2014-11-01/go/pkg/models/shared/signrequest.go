package shared

type SignRequest struct {
	GrantTokens      []string                 `json:"GrantTokens"`
	KeyID            string                   `json:"KeyId"`
	Message          string                   `json:"Message"`
	MessageType      *MessageTypeEnum         `json:"MessageType"`
	SigningAlgorithm SigningAlgorithmSpecEnum `json:"SigningAlgorithm"`
}
