package shared

type ApplicationsResponse struct {
	Item      []ApplicationResponse `json:"Item"`
	NextToken *string               `json:"NextToken"`
}
