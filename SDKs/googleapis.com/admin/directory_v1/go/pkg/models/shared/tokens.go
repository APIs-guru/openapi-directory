package shared

// Tokens
// JSON response template for List tokens operation in Directory API.
type Tokens struct {
	Etag  *string `json:"etag,omitempty"`
	Items []Token `json:"items,omitempty"`
	Kind  *string `json:"kind,omitempty"`
}
