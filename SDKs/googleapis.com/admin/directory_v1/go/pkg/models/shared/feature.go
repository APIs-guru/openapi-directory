package shared

// Feature
// JSON template for Feature object in Directory API.
type Feature struct {
	Etags *string `json:"etags,omitempty"`
	Kind  *string `json:"kind,omitempty"`
	Name  *string `json:"name,omitempty"`
}
