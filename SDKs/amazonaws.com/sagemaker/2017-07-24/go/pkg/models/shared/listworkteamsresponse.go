package shared

type ListWorkteamsResponse struct {
	NextToken *string    `json:"NextToken,omitempty"`
	Workteams []Workteam `json:"Workteams"`
}
