package shared

type TwilioMessageRequest struct {
	Base64Message *string `json:"base64_message"`
	Message       *string `json:"message"`
	To            string  `json:"to"`
}
