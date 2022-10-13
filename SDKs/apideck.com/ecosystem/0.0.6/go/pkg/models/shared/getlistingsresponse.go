package shared

type GetListingsResponse struct {
	Data       []Listing `json:"data"`
	Links      *Links    `json:"links"`
	Meta       *Meta     `json:"meta"`
	Status     string    `json:"status"`
	StatusCode int64     `json:"status_code"`
}
