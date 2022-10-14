package shared

type BigOvenResult struct {
	Data       map[string]interface{} `json:"Data,omitempty"`
	Message    *string                `json:"Message,omitempty"`
	StatusCode *int32                 `json:"StatusCode,omitempty"`
}
