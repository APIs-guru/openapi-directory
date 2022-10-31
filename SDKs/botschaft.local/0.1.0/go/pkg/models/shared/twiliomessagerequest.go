package shared

type TwilioMessageRequest struct {
	Base64Message *string `json:"base64_message,omitempty"`
	Message       *string `json:"message,omitempty"`
	To            string  `json:"to"`
}
