package shared

type PlayersListResponse struct {
	Data       []Player    `json:"data,omitempty"`
	Pagination *Pagination `json:"pagination,omitempty"`
}
