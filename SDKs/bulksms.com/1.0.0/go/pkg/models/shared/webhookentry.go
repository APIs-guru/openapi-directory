package shared

type WebhookEntryInvokeOptionEnum string

const (
	WebhookEntryInvokeOptionEnumOne  WebhookEntryInvokeOptionEnum = "ONE"
	WebhookEntryInvokeOptionEnumMany WebhookEntryInvokeOptionEnum = "MANY"
)

type WebhookEntryTriggerScopeEnum string

const (
	WebhookEntryTriggerScopeEnumSent     WebhookEntryTriggerScopeEnum = "SENT"
	WebhookEntryTriggerScopeEnumReceived WebhookEntryTriggerScopeEnum = "RECEIVED"
)

type WebhookEntry struct {
	Active              *bool                         `json:"active"`
	ContactEmailAddress *string                       `json:"contactEmailAddress"`
	InvokeOption        *WebhookEntryInvokeOptionEnum `json:"invokeOption"`
	Name                string                        `json:"name"`
	OnWebApp            *bool                         `json:"onWebApp"`
	TriggerScope        WebhookEntryTriggerScopeEnum  `json:"triggerScope"`
	URL                 string                        `json:"url"`
}
