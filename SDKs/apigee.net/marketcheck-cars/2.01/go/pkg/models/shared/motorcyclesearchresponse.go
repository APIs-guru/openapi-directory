package shared

type MotorcycleSearchResponse struct {
	Facets      map[string]interface{}  `json:"facets"`
	Listings    []MotorcycleBaseListing `json:"listings"`
	NumFound    *int64                  `json:"num_found"`
	RangeFacets map[string]interface{}  `json:"range_facets"`
	Stats       map[string]interface{}  `json:"stats"`
}
