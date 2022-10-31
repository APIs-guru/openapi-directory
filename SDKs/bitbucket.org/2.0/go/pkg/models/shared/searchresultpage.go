package shared



type SearchResultPage struct {
    Next *string `json:"next,omitempty"`
    Page *int32 `json:"page,omitempty"`
    Pagelen *int32 `json:"pagelen,omitempty"`
    Previous *string `json:"previous,omitempty"`
    QuerySubstituted *bool `json:"query_substituted,omitempty"`
    Size *int64 `json:"size,omitempty"`
    Values []SearchCodeSearchResult `json:"values,omitempty"`
    
}

