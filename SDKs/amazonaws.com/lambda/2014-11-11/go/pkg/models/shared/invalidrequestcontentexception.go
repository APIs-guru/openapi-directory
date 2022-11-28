package shared

// InvalidRequestContentException
// The request body could not be parsed as JSON.
type InvalidRequestContentException struct {
	Type    *string `json:"Type,omitempty"`
	Message *string `json:"message,omitempty"`
}
