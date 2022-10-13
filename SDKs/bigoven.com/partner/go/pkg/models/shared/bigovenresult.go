package shared

type BigOvenResult struct {
	Data       map[string]interface{} `json:"Data"`
	Message    *string                `json:"Message"`
	StatusCode *int32                 `json:"StatusCode"`
}
