package shared

type Errors struct {
	Code   *string `json:"code"`
	Detail *string `json:"detail"`
	Status *string `json:"status"`
	Title  string  `json:"title"`
}
