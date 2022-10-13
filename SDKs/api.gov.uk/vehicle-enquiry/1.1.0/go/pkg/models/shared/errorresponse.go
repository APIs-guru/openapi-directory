package shared

type ErrorResponse struct {
	Errors []Errors `json:"errors"`
}
