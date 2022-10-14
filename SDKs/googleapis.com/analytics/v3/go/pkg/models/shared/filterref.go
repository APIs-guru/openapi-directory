package shared

type FilterRef struct {
	AccountID *string `json:"accountId,omitempty"`
	Href      *string `json:"href,omitempty"`
	ID        *string `json:"id,omitempty"`
	Kind      *string `json:"kind,omitempty"`
	Name      *string `json:"name,omitempty"`
}
