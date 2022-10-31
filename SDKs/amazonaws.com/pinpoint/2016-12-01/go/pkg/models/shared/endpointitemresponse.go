package shared

type EndpointItemResponse struct {
	Message    *string `json:"Message,omitempty"`
	StatusCode *int64  `json:"StatusCode,omitempty"`
}
