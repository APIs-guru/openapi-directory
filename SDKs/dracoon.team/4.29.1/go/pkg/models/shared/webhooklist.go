package shared



type WebhookList struct {
    Items []Webhook `json:"items"`
    Range Range `json:"range"`
    
}

