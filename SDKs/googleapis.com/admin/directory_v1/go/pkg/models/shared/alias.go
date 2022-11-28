package shared

// Alias
// JSON template for Alias object in Directory API.
type Alias struct {
	Alias        *string `json:"alias,omitempty"`
	Etag         *string `json:"etag,omitempty"`
	ID           *string `json:"id,omitempty"`
	Kind         *string `json:"kind,omitempty"`
	PrimaryEmail *string `json:"primaryEmail,omitempty"`
}
