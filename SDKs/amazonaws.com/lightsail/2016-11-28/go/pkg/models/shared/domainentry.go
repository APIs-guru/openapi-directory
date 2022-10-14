package shared

type DomainEntry struct {
	ID      *string           `json:"id,omitempty"`
	IsAlias *bool             `json:"isAlias,omitempty"`
	Name    *string           `json:"name,omitempty"`
	Options map[string]string `json:"options,omitempty"`
	Target  *string           `json:"target,omitempty"`
	Type    *string           `json:"type,omitempty"`
}
