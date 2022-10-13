package shared

type ListDatabasesResponse struct {
	Databases []Database `json:"Databases"`
	NextToken *string    `json:"NextToken"`
}
