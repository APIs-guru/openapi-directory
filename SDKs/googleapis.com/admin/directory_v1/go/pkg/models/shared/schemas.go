package shared

type Schemas struct {
	Etag    *string  `json:"etag,omitempty"`
	Kind    *string  `json:"kind,omitempty"`
	Schemas []Schema `json:"schemas,omitempty"`
}
