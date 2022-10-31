package shared

type ImageSearchItemSearchResults struct {
	Images          []ImageSearchItem `json:"images,omitempty"`
	RelatedSearches []RelatedSearch   `json:"related_searches,omitempty"`
	ResultCount     *int32            `json:"result_count,omitempty"`
}
