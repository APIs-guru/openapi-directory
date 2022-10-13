package shared

type SearchDatabasesByLfTagsResponse struct {
	DatabaseList []TaggedDatabase `json:"DatabaseList"`
	NextToken    *string          `json:"NextToken"`
}
