package shared

type ExtraField struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
