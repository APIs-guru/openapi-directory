package shared

type Operation struct {
	From  *string                `json:"from"`
	Op    *string                `json:"op"`
	Path  *string                `json:"path"`
	Value map[string]interface{} `json:"value"`
}
