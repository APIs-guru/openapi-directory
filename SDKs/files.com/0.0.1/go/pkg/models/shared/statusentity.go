package shared

type StatusEntity struct {
	ClickwrapBody *string       `json:"clickwrap_body"`
	ClickwrapID   *int32        `json:"clickwrap_id"`
	Code          *int32        `json:"code"`
	Data          *AutoEntity   `json:"data"`
	Errors        *ErrorsEntity `json:"errors"`
	Message       *string       `json:"message"`
	Status        *string       `json:"status"`
}
