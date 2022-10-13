package shared

type ListEulasResponse struct {
	Eulas     []Eula  `json:"eulas"`
	NextToken *string `json:"nextToken"`
}
