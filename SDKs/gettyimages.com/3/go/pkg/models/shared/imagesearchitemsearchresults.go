package shared

type ImageSearchItemSearchResults struct {
	Images          []ImageSearchItem `json:"images"`
	RelatedSearches []RelatedSearch   `json:"related_searches"`
	ResultCount     *int32            `json:"result_count"`
}
