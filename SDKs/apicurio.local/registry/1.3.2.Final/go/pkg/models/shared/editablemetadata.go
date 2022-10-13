package shared

type EditableMetaData struct {
	Description *string           `json:"description"`
	Labels      []string          `json:"labels"`
	Name        *string           `json:"name"`
	Properties  map[string]string `json:"properties"`
}
