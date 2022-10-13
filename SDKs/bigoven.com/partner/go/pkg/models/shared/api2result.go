package shared

type Api2Result struct {
	Data       map[string]interface{} `json:"Data"`
	Message    *string                `json:"Message"`
	StatusCode *int32                 `json:"StatusCode"`
}
