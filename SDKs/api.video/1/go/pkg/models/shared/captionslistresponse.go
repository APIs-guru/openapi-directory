package shared

type CaptionsListResponse struct {
	Data       []Subtitle  `json:"data"`
	Pagination *Pagination `json:"pagination"`
}
