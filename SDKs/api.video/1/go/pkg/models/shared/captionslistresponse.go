package shared

type CaptionsListResponse struct {
	Data       []Subtitle  `json:"data,omitempty"`
	Pagination *Pagination `json:"pagination,omitempty"`
}
