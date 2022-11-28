package shared

// EventItemResponse
// Provides the status code and message that result from processing an event.
type EventItemResponse struct {
	Message    *string `json:"Message,omitempty"`
	StatusCode *int64  `json:"StatusCode,omitempty"`
}
