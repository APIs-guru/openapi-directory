package shared

type ListSitesOutput struct {
	NextToken *string `json:"NextToken"`
	Sites     []Site  `json:"Sites"`
}
