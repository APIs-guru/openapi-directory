package shared



type DiscordMessageRequest struct {
    Base64Message *string `json:"base64_message,omitempty"`
    Channel string `json:"channel"`
    Message *string `json:"message,omitempty"`
    
}

