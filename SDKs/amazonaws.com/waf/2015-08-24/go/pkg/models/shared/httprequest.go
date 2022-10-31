package shared

type HTTPRequest struct {
	ClientIP    *string      `json:"ClientIP,omitempty"`
	Country     *string      `json:"Country,omitempty"`
	HTTPVersion *string      `json:"HTTPVersion,omitempty"`
	Headers     []HTTPHeader `json:"Headers,omitempty"`
	Method      *string      `json:"Method,omitempty"`
	URI         *string      `json:"URI,omitempty"`
}
