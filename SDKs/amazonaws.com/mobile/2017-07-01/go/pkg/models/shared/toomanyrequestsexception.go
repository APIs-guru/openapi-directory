package shared

// TooManyRequestsException
//
//	Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay.
type TooManyRequestsException struct {
	Message *string `json:"message,omitempty"`
}
