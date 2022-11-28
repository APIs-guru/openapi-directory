package shared

// InternalFailureException
//
//	The service has encountered an unexpected error condition which prevents it from servicing the request.
type InternalFailureException struct {
	Message *string `json:"message,omitempty"`
}
