package shared

// RvSearchResponse
// RV search query response
type RvSearchResponse struct {
	Facets      map[string]interface{} `json:"facets,omitempty"`
	Listings    []RvBaseListing        `json:"listings,omitempty"`
	NumFound    *int64                 `json:"num_found,omitempty"`
	RangeFacets map[string]interface{} `json:"range_facets,omitempty"`
	Stats       map[string]interface{} `json:"stats,omitempty"`
}
