package shared

// RootCauseException
// The exception associated with a root cause.
type RootCauseException struct {
	Message *string `json:"Message,omitempty"`
	Name    *string `json:"Name,omitempty"`
}
