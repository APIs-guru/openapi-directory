package shared

type VideosListResponse struct {
	Data       []Video    `json:"data"`
	Pagination Pagination `json:"pagination"`
}
