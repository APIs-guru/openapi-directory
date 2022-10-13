package shared

type DiscordMessageRequest struct {
	Base64Message *string `json:"base64_message"`
	Channel       string  `json:"channel"`
	Message       *string `json:"message"`
}
