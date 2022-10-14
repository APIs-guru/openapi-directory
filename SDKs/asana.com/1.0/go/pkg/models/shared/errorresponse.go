package shared

type ErrorResponse struct {
	Errors []Error `json:"errors,omitempty"`
}
