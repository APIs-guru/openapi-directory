package shared

// Aliases
// JSON response template to list aliases in Directory API.
type Aliases struct {
	Aliases []interface{} `json:"aliases,omitempty"`
	Etag    *string       `json:"etag,omitempty"`
	Kind    *string       `json:"kind,omitempty"`
}
