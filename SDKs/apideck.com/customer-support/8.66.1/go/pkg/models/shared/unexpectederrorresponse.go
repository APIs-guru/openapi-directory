package shared

type UnexpectedErrorResponse struct {
	Detail     *interface{} `json:"detail"`
	Error      *string      `json:"error"`
	Message    *string      `json:"message"`
	Ref        *string      `json:"ref"`
	StatusCode *float64     `json:"status_code"`
	TypeName   *string      `json:"type_name"`
}
