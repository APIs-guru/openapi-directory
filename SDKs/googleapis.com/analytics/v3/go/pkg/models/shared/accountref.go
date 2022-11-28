package shared

// AccountRef
// JSON template for a linked account.
type AccountRef struct {
	Href *string `json:"href,omitempty"`
	ID   *string `json:"id,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
}
