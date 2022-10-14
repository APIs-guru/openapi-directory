package shared

type FormField struct {
	AllowCustomValues *bool         `json:"allow_custom_values,omitempty"`
	CustomField       *bool         `json:"custom_field,omitempty"`
	Description       *string       `json:"description,omitempty"`
	Disabled          *bool         `json:"disabled,omitempty"`
	ID                *string       `json:"id,omitempty"`
	Label             *string       `json:"label,omitempty"`
	Options           []interface{} `json:"options,omitempty"`
	Placeholder       *string       `json:"placeholder,omitempty"`
	Required          *bool         `json:"required,omitempty"`
	Sensitive         *bool         `json:"sensitive,omitempty"`
	Type              *interface{}  `json:"type,omitempty"`
}
