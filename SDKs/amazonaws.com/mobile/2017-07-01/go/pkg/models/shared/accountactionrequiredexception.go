package shared

// AccountActionRequiredException
//
//	Account Action is required in order to continue the request.
type AccountActionRequiredException struct {
	Message *string `json:"message,omitempty"`
}
