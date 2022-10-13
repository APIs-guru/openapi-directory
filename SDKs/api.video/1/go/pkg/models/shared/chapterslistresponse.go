package shared

type ChaptersListResponse struct {
	Data       []Chapter   `json:"data"`
	Pagination *Pagination `json:"pagination"`
}
