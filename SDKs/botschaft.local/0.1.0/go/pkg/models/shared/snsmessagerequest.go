package shared

type SnsMessageRequest struct {
	Base64Message *string `json:"base64_message,omitempty"`
	Message       *string `json:"message,omitempty"`
}
