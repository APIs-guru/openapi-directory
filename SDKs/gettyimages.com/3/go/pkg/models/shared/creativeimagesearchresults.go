package shared

type CreativeImageSearchResults struct {
	AutoCorrections *AutoCorrections          `json:"auto_corrections"`
	Images          []ImageSearchItemCreative `json:"images"`
	RelatedSearches []RelatedSearch           `json:"related_searches"`
	ResultCount     *int32                    `json:"result_count"`
}
