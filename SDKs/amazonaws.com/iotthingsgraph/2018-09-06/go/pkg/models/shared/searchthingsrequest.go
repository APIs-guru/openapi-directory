package shared

type SearchThingsRequest struct {
	EntityID         string  `json:"entityId"`
	MaxResults       *int64  `json:"maxResults,omitempty"`
	NamespaceVersion *int64  `json:"namespaceVersion,omitempty"`
	NextToken        *string `json:"nextToken,omitempty"`
}
