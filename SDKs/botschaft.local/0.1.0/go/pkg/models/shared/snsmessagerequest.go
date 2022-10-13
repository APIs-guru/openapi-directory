package shared

type SnsMessageRequest struct {
	Base64Message *string `json:"base64_message"`
	Message       *string `json:"message"`
}
