package shared

type ListSchemasResponse struct {
	NextToken *string  `json:"NextToken,omitempty"`
	Schemas   []string `json:"Schemas,omitempty"`
}
