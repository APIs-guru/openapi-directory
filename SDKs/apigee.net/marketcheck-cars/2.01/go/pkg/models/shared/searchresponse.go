package shared

type SearchResponse struct {
	Facets      map[string]interface{} `json:"facets"`
	Listings    []BaseListing          `json:"listings"`
	NumFound    *int64                 `json:"num_found"`
	RangeFacets map[string]interface{} `json:"range_facets"`
	Stats       map[string]interface{} `json:"stats"`
}
