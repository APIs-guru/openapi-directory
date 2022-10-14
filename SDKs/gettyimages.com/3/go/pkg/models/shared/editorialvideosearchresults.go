package shared

type EditorialVideoSearchResults struct {
	Facets          *SearchFacetsResponse      `json:"facets,omitempty"`
	RelatedSearches []RelatedSearch            `json:"related_searches,omitempty"`
	ResultCount     *int32                     `json:"result_count,omitempty"`
	Videos          []EditorialVideoSearchItem `json:"videos,omitempty"`
}
