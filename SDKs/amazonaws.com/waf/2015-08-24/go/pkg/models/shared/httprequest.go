package shared

type HTTPRequest struct {
	ClientIP    *string      `json:"ClientIP"`
	Country     *string      `json:"Country"`
	HTTPVersion *string      `json:"HTTPVersion"`
	Headers     []HTTPHeader `json:"Headers"`
	Method      *string      `json:"Method"`
	URI         *string      `json:"URI"`
}
