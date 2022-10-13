package shared

type Webhook struct {
	Active              *bool    `json:"active"`
	ContactEmailAddress *string  `json:"contactEmailAddress"`
	ID                  *float64 `json:"id"`
	Name                *string  `json:"name"`
	OnWebApp            *bool    `json:"onWebApp"`
	TriggerScope        *string  `json:"triggerScope"`
	URL                 *string  `json:"url"`
}
