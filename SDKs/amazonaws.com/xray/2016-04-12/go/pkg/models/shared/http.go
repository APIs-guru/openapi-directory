package shared

type HTTP struct {
	ClientIP   *string `json:"ClientIp"`
	HTTPMethod *string `json:"HttpMethod"`
	HTTPStatus *int64  `json:"HttpStatus"`
	HTTPURL    *string `json:"HttpURL"`
	UserAgent  *string `json:"UserAgent"`
}
