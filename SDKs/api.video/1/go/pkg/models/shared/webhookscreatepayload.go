package shared



type WebhooksCreatePayload struct {
    Events []string `json:"events"`
    URL string `json:"url"`
    
}

