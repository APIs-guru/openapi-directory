package shared




type WebhookEntryInvokeOptionEnum string

const (
    WebhookEntryInvokeOptionEnumOne WebhookEntryInvokeOptionEnum = "ONE"
WebhookEntryInvokeOptionEnumMany WebhookEntryInvokeOptionEnum = "MANY"
)



type WebhookEntryTriggerScopeEnum string

const (
    WebhookEntryTriggerScopeEnumSent WebhookEntryTriggerScopeEnum = "SENT"
WebhookEntryTriggerScopeEnumReceived WebhookEntryTriggerScopeEnum = "RECEIVED"
)


type WebhookEntry struct {
    Active *bool `json:"active,omitempty"`
    ContactEmailAddress *string `json:"contactEmailAddress,omitempty"`
    InvokeOption *WebhookEntryInvokeOptionEnum `json:"invokeOption,omitempty"`
    Name string `json:"name"`
    OnWebApp *bool `json:"onWebApp,omitempty"`
    TriggerScope WebhookEntryTriggerScopeEnum `json:"triggerScope"`
    URL string `json:"url"`
    
}

