package shared

type SearchThingsRequest struct {
	EntityID         string  `json:"entityId"`
	MaxResults       *int64  `json:"maxResults"`
	NamespaceVersion *int64  `json:"namespaceVersion"`
	NextToken        *string `json:"nextToken"`
}
