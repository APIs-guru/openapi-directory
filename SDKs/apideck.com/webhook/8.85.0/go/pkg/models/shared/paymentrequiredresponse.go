package shared

type PaymentRequiredResponse struct {
	Detail     *string  `json:"detail,omitempty"`
	Error      *string  `json:"error,omitempty"`
	Message    *string  `json:"message,omitempty"`
	Ref        *string  `json:"ref,omitempty"`
	StatusCode *float64 `json:"status_code,omitempty"`
	TypeName   *string  `json:"type_name,omitempty"`
}
