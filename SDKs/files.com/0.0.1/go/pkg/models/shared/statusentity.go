package shared

type StatusEntity struct {
	ClickwrapBody *string       `json:"clickwrap_body,omitempty"`
	ClickwrapID   *int32        `json:"clickwrap_id,omitempty"`
	Code          *int32        `json:"code,omitempty"`
	Data          *AutoEntity   `json:"data,omitempty"`
	Errors        *ErrorsEntity `json:"errors,omitempty"`
	Message       *string       `json:"message,omitempty"`
	Status        *string       `json:"status,omitempty"`
}
