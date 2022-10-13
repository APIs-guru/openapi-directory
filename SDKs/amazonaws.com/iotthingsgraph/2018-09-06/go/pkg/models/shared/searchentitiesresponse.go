package shared

type SearchEntitiesResponse struct {
	Descriptions []EntityDescription `json:"descriptions"`
	NextToken    *string             `json:"nextToken"`
}
