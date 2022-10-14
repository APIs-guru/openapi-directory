package shared

type EditorialImageSearchResults struct {
	Images          []ImageSearchItemEditorial `json:"images,omitempty"`
	RelatedSearches []RelatedSearch            `json:"related_searches,omitempty"`
	ResultCount     *int32                     `json:"result_count,omitempty"`
}
