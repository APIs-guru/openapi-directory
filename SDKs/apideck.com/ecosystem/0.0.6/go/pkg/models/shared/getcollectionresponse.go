package shared

type GetCollectionResponse struct {
	Data       Collection `json:"data"`
	Status     string     `json:"status"`
	StatusCode int64      `json:"status_code"`
}
