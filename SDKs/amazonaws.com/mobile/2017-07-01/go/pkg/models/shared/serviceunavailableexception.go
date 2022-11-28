package shared

// ServiceUnavailableException
//
//	The service is temporarily unavailable. The request should be retried after some time delay.
type ServiceUnavailableException struct {
	Message *string `json:"message,omitempty"`
}
