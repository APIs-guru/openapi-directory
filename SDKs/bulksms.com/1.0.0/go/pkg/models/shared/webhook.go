package shared

type Webhook struct {
	Active              *bool    `json:"active,omitempty"`
	ContactEmailAddress *string  `json:"contactEmailAddress,omitempty"`
	ID                  *float64 `json:"id,omitempty"`
	Name                *string  `json:"name,omitempty"`
	OnWebApp            *bool    `json:"onWebApp,omitempty"`
	TriggerScope        *string  `json:"triggerScope,omitempty"`
	URL                 *string  `json:"url,omitempty"`
}
