package shared

type DomainEntry struct {
	ID      *string           `json:"id"`
	IsAlias *bool             `json:"isAlias"`
	Name    *string           `json:"name"`
	Options map[string]string `json:"options"`
	Target  *string           `json:"target"`
	Type    *string           `json:"type"`
}
