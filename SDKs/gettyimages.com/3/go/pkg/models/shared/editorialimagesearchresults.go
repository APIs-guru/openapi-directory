package shared

type EditorialImageSearchResults struct {
	Images          []ImageSearchItemEditorial `json:"images"`
	RelatedSearches []RelatedSearch            `json:"related_searches"`
	ResultCount     *int32                     `json:"result_count"`
}
