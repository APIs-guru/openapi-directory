package shared

// Schemas
// JSON response template for List Schema operation in Directory API.
type Schemas struct {
	Etag    *string  `json:"etag,omitempty"`
	Kind    *string  `json:"kind,omitempty"`
	Schemas []Schema `json:"schemas,omitempty"`
}
