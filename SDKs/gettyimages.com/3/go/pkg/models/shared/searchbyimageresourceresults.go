package shared

type SearchByImageResourceResults struct {
	AutoCorrections  *AutoCorrections      `json:"auto_corrections,omitempty"`
	Facets           *SearchFacetsResponse `json:"facets,omitempty"`
	ImageFingerprint *string               `json:"image_fingerprint,omitempty"`
	Images           *interface{}          `json:"images,omitempty"`
	RelatedSearches  []RelatedSearch       `json:"related_searches,omitempty"`
	ResultCount      *int32                `json:"result_count,omitempty"`
}
