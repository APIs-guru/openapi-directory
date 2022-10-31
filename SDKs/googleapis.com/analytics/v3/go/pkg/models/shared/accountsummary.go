package shared

type AccountSummary struct {
	ID            *string              `json:"id,omitempty"`
	Kind          *string              `json:"kind,omitempty"`
	Name          *string              `json:"name,omitempty"`
	Starred       *bool                `json:"starred,omitempty"`
	WebProperties []WebPropertySummary `json:"webProperties,omitempty"`
}
