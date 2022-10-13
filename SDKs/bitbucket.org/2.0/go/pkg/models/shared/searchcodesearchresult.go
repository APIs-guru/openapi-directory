package shared

type SearchCodeSearchResult struct {
	ContentMatchCount *int64                 `json:"content_match_count"`
	ContentMatches    []SearchContentMatch   `json:"content_matches"`
	File              map[string]interface{} `json:"file"`
	PathMatches       []SearchSegment        `json:"path_matches"`
	Type              *string                `json:"type"`
}
