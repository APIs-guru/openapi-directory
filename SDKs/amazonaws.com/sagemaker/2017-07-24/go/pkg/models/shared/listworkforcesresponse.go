package shared

type ListWorkforcesResponse struct {
	NextToken  *string     `json:"NextToken,omitempty"`
	Workforces []Workforce `json:"Workforces"`
}
