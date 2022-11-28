package shared

// HTTP
// Information about an HTTP request.
type HTTP struct {
	ClientIP   *string `json:"ClientIp,omitempty"`
	HTTPMethod *string `json:"HttpMethod,omitempty"`
	HTTPStatus *int64  `json:"HttpStatus,omitempty"`
	HTTPURL    *string `json:"HttpURL,omitempty"`
	UserAgent  *string `json:"UserAgent,omitempty"`
}
