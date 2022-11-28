package shared

// UnauthorizedException
//
//	Credentials of the caller are insufficient to authorize the request.
type UnauthorizedException struct {
	Message *string `json:"message,omitempty"`
}
