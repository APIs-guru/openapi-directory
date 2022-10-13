package shared

type CustomField struct {
	Description *string      `json:"description"`
	ID          string       `json:"id"`
	Name        *string      `json:"name"`
	Value       *interface{} `json:"value"`
}
