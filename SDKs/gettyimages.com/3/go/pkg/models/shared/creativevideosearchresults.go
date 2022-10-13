package shared

type CreativeVideoSearchResults struct {
	AutoCorrections *AutoCorrections          `json:"auto_corrections"`
	Facets          *SearchFacetsResponse     `json:"facets"`
	RelatedSearches []RelatedSearch           `json:"related_searches"`
	ResultCount     *int32                    `json:"result_count"`
	Videos          []CreativeVideoSearchItem `json:"videos"`
}
