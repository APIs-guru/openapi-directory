package shared

type Feature struct {
	Etags *string `json:"etags,omitempty"`
	Kind  *string `json:"kind,omitempty"`
	Name  *string `json:"name,omitempty"`
}
