package shared

type ListDatabasesResponse struct {
	Databases []string `json:"Databases"`
	NextToken *string  `json:"NextToken"`
}
