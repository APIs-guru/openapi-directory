package shared

type SearchByImageResourceResults struct {
	AutoCorrections  *AutoCorrections      `json:"auto_corrections"`
	Facets           *SearchFacetsResponse `json:"facets"`
	ImageFingerprint *string               `json:"image_fingerprint"`
	Images           *interface{}          `json:"images"`
	RelatedSearches  []RelatedSearch       `json:"related_searches"`
	ResultCount      *int32                `json:"result_count"`
}
