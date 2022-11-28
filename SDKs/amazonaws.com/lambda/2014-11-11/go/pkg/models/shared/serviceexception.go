package shared

// ServiceException
// The AWS Lambda service encountered an internal error.
type ServiceException struct {
	Message *string `json:"Message,omitempty"`
	Type    *string `json:"Type,omitempty"`
}
