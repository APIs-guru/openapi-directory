package shared

type ListOutpostsOutput struct {
	NextToken *string   `json:"NextToken"`
	Outposts  []Outpost `json:"Outposts"`
}
