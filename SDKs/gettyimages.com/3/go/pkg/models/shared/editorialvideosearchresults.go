package shared

type EditorialVideoSearchResults struct {
	Facets          *SearchFacetsResponse      `json:"facets"`
	RelatedSearches []RelatedSearch            `json:"related_searches"`
	ResultCount     *int32                     `json:"result_count"`
	Videos          []EditorialVideoSearchItem `json:"videos"`
}
