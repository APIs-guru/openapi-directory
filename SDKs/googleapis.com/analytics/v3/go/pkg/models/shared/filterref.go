package shared

// FilterRefInput
// JSON template for a profile filter link.
type FilterRefInput struct {
	Href *string `json:"href,omitempty"`
	ID   *string `json:"id,omitempty"`
	Kind *string `json:"kind,omitempty"`
}

// FilterRef
// JSON template for a profile filter link.
type FilterRef struct {
	AccountID *string `json:"accountId,omitempty"`
	Href      *string `json:"href,omitempty"`
	ID        *string `json:"id,omitempty"`
	Kind      *string `json:"kind,omitempty"`
	Name      *string `json:"name,omitempty"`
}
