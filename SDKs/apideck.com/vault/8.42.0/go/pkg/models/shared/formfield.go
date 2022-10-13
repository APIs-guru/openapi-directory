package shared

type FormField struct {
	AllowCustomValues *bool         `json:"allow_custom_values"`
	CustomField       *bool         `json:"custom_field"`
	Description       *string       `json:"description"`
	Disabled          *bool         `json:"disabled"`
	ID                *string       `json:"id"`
	Label             *string       `json:"label"`
	Options           []interface{} `json:"options"`
	Placeholder       *string       `json:"placeholder"`
	Required          *bool         `json:"required"`
	Sensitive         *bool         `json:"sensitive"`
	Type              *interface{}  `json:"type"`
}
