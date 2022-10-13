package shared

type SearchEntitiesRequest struct {
	EntityTypes      []EntityTypeEnum `json:"entityTypes"`
	Filters          []EntityFilter   `json:"filters"`
	MaxResults       *int64           `json:"maxResults"`
	NamespaceVersion *int64           `json:"namespaceVersion"`
	NextToken        *string          `json:"nextToken"`
}
