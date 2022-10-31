package shared



type Keyword struct {
    EntityTypes []string `json:"entity_types,omitempty"`
    EntityUris []string `json:"entity_uris,omitempty"`
    KeywordID *string `json:"keyword_id,omitempty"`
    Relevance *int32 `json:"relevance,omitempty"`
    Text *string `json:"text,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

