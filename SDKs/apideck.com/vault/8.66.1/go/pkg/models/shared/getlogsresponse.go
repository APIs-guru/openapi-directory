package shared

type GetLogsResponse struct {
	Data       []Log  `json:"data"`
	Links      *Links `json:"links"`
	Meta       *Meta  `json:"meta"`
	Status     string `json:"status"`
	StatusCode int64  `json:"status_code"`
}
