package shared

type ListEngagementsResult struct {
	Engagements []Engagement `json:"Engagements"`
	NextToken   *string      `json:"NextToken"`
}
