package shared

type CustomField struct {
	Description *string      `json:"description,omitempty"`
	ID          string       `json:"id"`
	Name        *string      `json:"name,omitempty"`
	Value       *interface{} `json:"value,omitempty"`
}
