package shared

type Envvar struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
