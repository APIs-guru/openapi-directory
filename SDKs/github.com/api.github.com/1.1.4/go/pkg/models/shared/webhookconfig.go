package shared



type WebhookConfig struct {
    ContentType *string `json:"content_type,omitempty"`
    InsecureSsl *string `json:"insecure_ssl,omitempty"`
    Secret *string `json:"secret,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

