package shared

// ResourceNotFoundException
// The function or the event source specified in the request does not exist.
type ResourceNotFoundException struct {
	Message *string `json:"Message,omitempty"`
	Type    *string `json:"Type,omitempty"`
}
