package shared



type WebhookTestEntity struct {
    Code *int32 `json:"code,omitempty"`
    Data *AutoEntity `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    Status *string `json:"status,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

