package shared

type CreativeVideoSearchResults struct {
	AutoCorrections *AutoCorrections          `json:"auto_corrections,omitempty"`
	Facets          *SearchFacetsResponse     `json:"facets,omitempty"`
	RelatedSearches []RelatedSearch           `json:"related_searches,omitempty"`
	ResultCount     *int32                    `json:"result_count,omitempty"`
	Videos          []CreativeVideoSearchItem `json:"videos,omitempty"`
}
