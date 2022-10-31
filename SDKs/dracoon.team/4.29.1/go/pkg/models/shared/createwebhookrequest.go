package shared



type CreateWebhookRequest struct {
    EventTypeNames []string `json:"eventTypeNames"`
    IsEnabled *bool `json:"isEnabled,omitempty"`
    Name string `json:"name"`
    Secret *string `json:"secret,omitempty"`
    TriggerExampleEvent *bool `json:"triggerExampleEvent,omitempty"`
    URL string `json:"url"`
    
}

