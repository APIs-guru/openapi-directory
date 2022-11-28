package shared

// BadRequestException
// An exception object returned when a request fails.
type BadRequestException struct {
	Message *string `json:"message,omitempty"`
}
