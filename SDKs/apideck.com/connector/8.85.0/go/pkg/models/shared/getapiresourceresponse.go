package shared

type GetAPIResourceResponse struct {
	Data       APIResource `json:"data"`
	Links      *Links      `json:"links,omitempty"`
	Meta       *Meta       `json:"meta,omitempty"`
	Status     string      `json:"status"`
	StatusCode int64       `json:"status_code"`
}
