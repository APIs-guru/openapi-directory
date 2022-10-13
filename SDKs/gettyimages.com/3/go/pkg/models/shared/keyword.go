package shared

type Keyword struct {
	EntityTypes []string `json:"entity_types"`
	EntityUris  []string `json:"entity_uris"`
	KeywordID   *string  `json:"keyword_id"`
	Relevance   *int32   `json:"relevance"`
	Text        *string  `json:"text"`
	Type        *string  `json:"type"`
}
