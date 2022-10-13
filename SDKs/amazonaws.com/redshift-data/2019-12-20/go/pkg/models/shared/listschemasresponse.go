package shared

type ListSchemasResponse struct {
	NextToken *string  `json:"NextToken"`
	Schemas   []string `json:"Schemas"`
}
