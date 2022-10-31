package shared



type CreateWebhookRequest struct {
    DeliveryURL string `json:"delivery_url"`
    Description *string `json:"description,omitempty"`
    Events []WebhookEventTypeEnum `json:"events"`
    Status StatusEnum `json:"status"`
    UnifiedAPI UnifiedAPIIDEnum `json:"unified_api"`
    
}

