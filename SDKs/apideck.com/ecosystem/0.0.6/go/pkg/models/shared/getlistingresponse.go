package shared

type GetListingResponse struct {
	Data       Listing `json:"data"`
	Status     string  `json:"status"`
	StatusCode int64   `json:"status_code"`
}
