package shared

type ListAssociationsResult struct {
	Associations []Association `json:"Associations"`
	NextToken    *string       `json:"NextToken"`
}
