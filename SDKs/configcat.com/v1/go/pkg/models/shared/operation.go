package shared

type Operation struct {
	From  *string                `json:"from,omitempty"`
	Op    *string                `json:"op,omitempty"`
	Path  *string                `json:"path,omitempty"`
	Value map[string]interface{} `json:"value,omitempty"`
}
