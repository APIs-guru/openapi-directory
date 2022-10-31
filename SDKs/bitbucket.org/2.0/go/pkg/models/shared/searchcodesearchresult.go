package shared



type SearchCodeSearchResult struct {
    ContentMatchCount *int64 `json:"content_match_count,omitempty"`
    ContentMatches []SearchContentMatch `json:"content_matches,omitempty"`
    File map[string]interface{} `json:"file,omitempty"`
    PathMatches []SearchSegment `json:"path_matches,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

