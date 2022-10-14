package shared

type Api2Result struct {
	Data       map[string]interface{} `json:"Data,omitempty"`
	Message    *string                `json:"Message,omitempty"`
	StatusCode *int32                 `json:"StatusCode,omitempty"`
}
