package shared

type ListAppsResponse struct {
	Apps      []AppDetails `json:"Apps"`
	NextToken *string      `json:"NextToken"`
}
