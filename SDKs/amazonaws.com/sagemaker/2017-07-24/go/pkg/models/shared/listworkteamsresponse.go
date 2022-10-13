package shared

type ListWorkteamsResponse struct {
	NextToken *string    `json:"NextToken"`
	Workteams []Workteam `json:"Workteams"`
}
