package shared

type GetProductResponse struct {
	Data       Product `json:"data"`
	Status     string  `json:"status"`
	StatusCode int64   `json:"status_code"`
}
