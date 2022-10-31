package shared



type UpdateWebhookRequest struct {
    EventTypeNames []string `json:"eventTypeNames,omitempty"`
    IsEnabled *bool `json:"isEnabled,omitempty"`
    Name *string `json:"name,omitempty"`
    Secret *string `json:"secret,omitempty"`
    TriggerExampleEvent *bool `json:"triggerExampleEvent,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

