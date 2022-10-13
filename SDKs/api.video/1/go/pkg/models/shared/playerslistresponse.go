package shared

type PlayersListResponse struct {
	Data       []Player    `json:"data"`
	Pagination *Pagination `json:"pagination"`
}
