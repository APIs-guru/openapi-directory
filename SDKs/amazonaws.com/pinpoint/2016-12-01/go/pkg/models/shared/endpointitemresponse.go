package shared

// EndpointItemResponse
// Provides the status code and message that result from processing data for an endpoint.
type EndpointItemResponse struct {
	Message    *string `json:"Message,omitempty"`
	StatusCode *int64  `json:"StatusCode,omitempty"`
}
