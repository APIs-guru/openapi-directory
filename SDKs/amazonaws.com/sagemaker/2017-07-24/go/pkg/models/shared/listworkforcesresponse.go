package shared

type ListWorkforcesResponse struct {
	NextToken  *string     `json:"NextToken"`
	Workforces []Workforce `json:"Workforces"`
}
